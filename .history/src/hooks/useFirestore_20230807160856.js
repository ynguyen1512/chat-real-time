import { useEffect } from "react";
import { db } from "../firebase/config";

const useFirestore = (collection, condition) => {
  useEffect(() => {
    // When there is a change in this collection --> callback of onSnapshot is executed
    let collectionRef = db.collection(collection).orderBy('createdAt')

// Condition
// {
//   fieldName: 'abc',
//    operator: '=='
//    compareValue: 'adb'
// }
//     
    if(condition) {
        collectionRef.where(condition.fieldName, condition.operator, condition.value)
    }


    // .onSnapshot((snapshot) => {
    //   // Convert data from firebase to javascript
    //   const data = snapshot.docs.map((doc) => ({
    //     ...doc.data(),
    //     id: doc.id,
    //   }));
    //   console.log({ data, snapshot, docs: snapshot.docs });
    });
  }, []);
};

export default useFirestore;
