import { useEffect} from 'react';


const useTitle=title=>{

useEffect(()=>{
    document.title=`${title} - Photo Editing service`
},[title])
}

export default useTitle;