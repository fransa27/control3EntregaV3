/**
 * action:
 * {
 *  'type': 'ADD',
 *  'movie': {...}
 * }
 * @param {*} previousState 
 * @param {*} action 
 */
 function newsReducer (previousState = [], action) {
    switch (action.type) {
        case 'ADD':
            if (previousState.includes(action.newsss)){
                alert(`¡ Ya está en FAVORITOS !: ${action.newsss.title}`)
                return previousState
            }
            else{
                alert(`NUEVO FAVORITO AGREGADO: ${action.newsss.title}`)
                return [action.newsss ,  ...previousState ]
            }
            //aaaa
        case 'DELETE':
            if (previousState.includes(action.newsss)){
                alert(`¡ Eliminado de FAVORITOS !: ${action.newsss.title}`)
                
                const indice = previousState.indexOf(action.newsss)
                previousState.splice(indice,1)
                return previousState
            }
            else{
                alert(`Elemento no pertenece a lista de FAVORITOS: ${action.newsss.title}`)
                return previousState
            }
        default:
            return previousState
    }
}

export default newsReducer