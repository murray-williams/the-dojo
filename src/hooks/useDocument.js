import { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config'

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)

  // realtime data for document

  useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id)
    // get realtime updates on document
    // snapshot is the document in the firestore db
    // if anything on the doc changes the function fires again
    // and we get the updated snapshot with the changes
    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        if (snapshot.data()) {
          // use data() method to get the data inside snapshot
          setDocument({ ...snapshot.data(), id: snapshot.id })
          setError(null)
        }
        // see if doc ref exists otherwise throw error
        else {
          setError('could not fetch that document')
        }

        // second agument that runs if there is an error
      },
      (err) => {
        console.log(err.message)
        setError('failed to get document')
      }
    )
    // unsubscribe if component unmounts
    return () => unsubscribe()
  }, [collection, id])

  return { document, error }
}
