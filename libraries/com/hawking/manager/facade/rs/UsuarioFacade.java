package com.hawking.manager.facade.rs;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.hawking.manager.model.domain.Usuario;
import com.hawking.mannager.facade.AbstractFacade;

@Path("/usuario")
@Produces({
	MediaType.APPLICATION_JSON,
	MediaType.APPLICATION_XML	
})
@Consumes(MediaType.APPLICATION_JSON)
public class UsuarioFacade extends AbstractFacade<Usuario>{
	
    @PersistenceContext(unitName = "cianorte")
    private EntityManager em;
    
    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public UsuarioFacade() {
        super(Usuario.class);
    }
	
	@GET
	@Path("/usuario/[login]/[password]")
	@Produces("application/jason")
	public Usuario singIn(@PathParam("login") String login, @PathParam("password") String password) {
		return super.singin(login, password);
	}
	
	/*public void singOut() {
		
	}
	
	public Usuario salvar(Usuario usuario) {
		
		return usuario;
	}
	
	public void inativarUsuario(Usuario usuario) {
		
	}*/
}
