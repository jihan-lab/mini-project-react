import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import image from "./images/products-robotic.jpg"

const ProductList = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProduct(response.data);
    }

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`);
        getProduct();
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <div className="container-lg">
                    <a className="navbar-brand" href="index.html">
                        <img src="images/icon.png" width="50" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-3">
                                <a className="nav-link active" href="index.html">Home</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="about.html">About Us</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="#">Sign Up</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="btn btn-success px-4" href="#">Sign In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container-lg bawah-nav">

                <div id="carouselExampleCaptions" className="carousel slide mt-2" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item carousel-custom active">
                            <img src="images/banner3.jpg" className="carousel-image d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item carousel-custom">
                            <img src="images/banner2.jpg" className="carousel-image d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item carousel-custom">
                            <img src="images/banner.jpg" className="carousel-image d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-12">
                        <h2>New Products</h2>
                    </div>
                </div>
                <div className="row">
                    {products.map((product, index) => (
                        <div className="col-6 col-md-4 col-lg-3 mt-2" key={product.id}>
                            <div className="card">
                                <div className="products-thumbnail">
                                    <div className="products-image" data-bs-toggle="modal" data-bs-target="#modalProducts-1" style={{ backgroundImage: `url(${image})` }}>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">Rp. {product.price},-</p>
                                    <p className="card-text">Stok : {product.quantity}</p>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#modalProducts-1"
                                        className="btn btn-primary">Preview</button>
                                </div>
                            </div>
                            <div className="modal fade" id="modalProducts-1" aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">{product.name}</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="modal-thumbnail">
                                                        <div className="products-image" style={{ backgroundImage: `url(${image})` }}>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{product.name}</h5>
                                                        <p className="card-text">Rp. {product.price},-</p>
                                                        <p className="card-text">Stok : {product.quantity}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-success" >Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-6">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Your Full name</label>
                                    <input type="text" className="form-control" name="name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" name="email" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Your Feedback</label>
                                    <textarea className="form-control" id="feedback" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary mb-5">Submit</button>
                            </form>
                        </div>
                        <div className="col-lg-6 ms-auto align-self-end">
                            <div className="row">
                                <div className="col-lg-12 text-end">
                                    <p>Follow us on</p>
                                    <a href="">
                                        <img src="images/ig.png" alt="" />
                                    </a>
                                    <a href="">
                                        <img src="images/fb.png" alt="" />
                                    </a>
                                    <a href="">
                                        <img src="images/twitter.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-end">
                                    <p className="pt-4 pb-2">
                                        Website untuk belanja perlengkapan Gawai kamu semua, Let's Go
                                    </p>
                                    <p className="text-muted mb-5">
                                        &copy; 2021 Angin Ribut | Official Store
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="container">
                <Link to="/add" className="btn btn-primary my-2">Add New</Link>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Harga</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                                <td>
                                    <Link to={`/edit/${product.id}`} className="btn btn-success">Edit</Link>
                                    <button onClick={() => deleteProduct(product.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductList
