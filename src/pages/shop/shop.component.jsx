import react from "react";
import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/preview-component/collection-preview.component";

class ShopPage extends react.Component {
    constructor(props) {
        super();

        this.state = {
            collections: SHOP_DATA
        } 

    }

render () {
    const {collections} = this.state;
    return (<div className = "shop-page">
        {
        collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key = {id} {...otherCollectionProps}/>
        ))}

    </div>);
}
}
export default ShopPage;