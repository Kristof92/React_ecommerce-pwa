import React, {useEffect} from "react"
import {useParams} from "react-router-dom"
import {connect} from "react-redux"

import {selectCollection} from "../../redux/shop/shop.selectors"
import {changeSelectedCollectionId} from "../../redux/shop/shop.actions"

import './collection.styles.scss'
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({collection, changeParams}) => {
  const { title, items } = collection
  let params = useParams()

  useEffect(() => {
    changeParams(params.collectionId)
  })

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
          items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  collection: selectCollection(state.shop.params)(state)
})

const mapDispatchToProps = dispatch => ({
  changeParams: item => dispatch(changeSelectedCollectionId(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage)
