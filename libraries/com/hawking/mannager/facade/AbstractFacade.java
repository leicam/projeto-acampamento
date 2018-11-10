package com.hawking.mannager.facade;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Query;

@NamedQueries({
	@NamedQuery(name = "singin", query = "SELECT u FROM USER u WHERE u.LOGIN = :login AND u.PASSWORD = :password")
})
public abstract class AbstractFacade<T> {
    
    private Class<T> entityClass;
    protected abstract EntityManager getEntityManager();
    
    public AbstractFacade(Class<T> entityClass){
        this.entityClass = entityClass;
    }
    
    public void salvar(T entity){
        getEntityManager().merge(entity);
    }
    
    public void remover(T entity){
        getEntityManager().remove(getEntityManager().merge(entity));
    }
    
    public T buscar(Object id){
        return getEntityManager().find(entityClass, id);
    }
    
    public List<T> listaTodos(){
        Query query = getEntityManager().createQuery("from "+entityClass.getSimpleName());
        return query.getResultList();
    }
    
    public List<T> listaFiltrando(String filtro, String... atributos){
        String hql = "from "+entityClass.getSimpleName()+" obj where ";
        for(String atributo : atributos){
            hql += "lower(obj."+atributo+") like :filtro or ";
        }
        hql = hql.substring(0, hql.length() - 3);
        Query query = getEntityManager().createQuery(hql);
        query.setParameter("filtro", "%"+filtro.toLowerCase()+"%");
        return query.getResultList();
    }
    
	public T singin(String login, String password) {
		return (T) getEntityManager()
						.createNamedQuery("singin")
						.setParameter("login", login)
						.setParameter("password", password)
						.getSingleResult();
	}
}
