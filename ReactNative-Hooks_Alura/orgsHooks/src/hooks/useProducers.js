import { useEffect, useState } from 'react';

import { producersLoad } from '../services/dataLoad';

export default function useProducers() {
    const [title, setTitle] = useState();
    const [list, setList] = useState([]);

    useEffect(() => {
        const returnData = producersLoad();
        setTitle(returnData.title);
        setList(returnData.list);
    }, []);

    return [title, list];
}
