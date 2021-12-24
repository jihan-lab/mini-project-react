import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";


const EditProduct = () => {
    const [name, setName] = useState([]);
    const [qty, setQty] = useState([]);
    const [price, setPrice] = useState([]);
    const history = useHistory();
    const { id } = useParams();

    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/products/${id}`, {
            name: name,
            quantity: qty,
            price: price
        });
        history.push("/");
    }

    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setName(response.data.name);
        setQty(response.data.quantity);
        setPrice(response.data.price);
    }

    return (
        <div className="row">
            <div className="col-lg-6">
                <form onSubmit={updateProduct}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            placeholder="Name.."
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input
                            type="number"
                            className="form-control"
                            value={qty}
                            placeholder="Quantity.."
                            onChange={(e) => setQty(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            value={price}
                            placeholder="Price.."
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </div>
                    {name} - {qty} - {price}
                </form>
            </div>
        </div>
    )
}

export default EditProduct
