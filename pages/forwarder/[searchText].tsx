import { useRouter } from "next/router";
import { useEffect } from "react";

const searchText: React.FC = () => {
  
    const router = useRouter();
    const { searchText } = router.query;

    useEffect(() => {
        router.push(`/books/${searchText}`);
        }, [searchText]);
  
    return (
      <>
        
      </>
    );
    };
    export default searchText;