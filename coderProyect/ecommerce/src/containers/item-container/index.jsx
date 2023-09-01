import React from 'react'
import TabsMenu from '../../components/tabs';
import { useNavigate, useParams } from 'react-router-dom';
import ItemsList from '../../components/items-list';
import { getFirestore, collection, doc, getDoc, getDocs, where, query } from 'firebase/firestore';


const CATEGORIES = [{id: 'all', title: 'Todos los productos'}, {id: 'electro', title: 'Electrónica'}, {id: 'ropa', title: 'Ropa'}]


const ItemContainer = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const { category } = useParams();
  const navigate = useNavigate();
  // const category = useParams().category;

  const current = CATEGORIES.some(cat => cat.id === category) ? category : 'all';


  React.useEffect(() => {
    if (!CATEGORIES.some(cat => cat.id === category)) {
      navigate('/products/all');
    }
  }, [category, navigate])

  // React.useEffect(() => {
  //   setLoading(true);
  //   getProducts(searchCategory(category))
  //   .then(res => res.json())
  //   .then(res => {
  //     const data = res.results?.map((elemento) => ({
  //       id: elemento.id,
  //       title: elemento.title,
  //       price: elemento.price,
  //       image: elemento.thumbnail,
  //       stock: elemento.available_quantity
  //     }))
  //     setItems(data);
  //   })
  //   .finally(() => setLoading(false))
  // }, [category])

  React.useEffect(() => {
        setLoading(true);

    const db = getFirestore();
    // const getProducts = doc(db, 'productos', '5iK7kcrrNzPfC4pXHETl')
    const getCollection = collection(db, 'productos');


    if (category === 'all') {
      getDocs(getCollection)
      .then((snapshot) => {
        // if (snapshot.exists()) {
          // console.log({id: snapshot.id, ...snapshot.data()});
          setLoading(false);
          setItems(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
        // }
      })
    } else if (CATEGORIES.some(categories => categories.id === category) ) {
      const q = query(getCollection, where("categoryId", '==', category))

      getDocs(q)
      .then((snapshot) => {
        setItems(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
        setLoading(false);
      })
    }
    
  }, [category])

  return (
    <div>
      <TabsMenu current={current} items={CATEGORIES} />
      <div style={{ padding: 50}}>
        <ItemsList items={items} loading={loading} />
      </div>
    </div>
  )
}

export default ItemContainer;