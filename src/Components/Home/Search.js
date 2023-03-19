import React from "react";
import './Search.css';
const Search =()=>{
    return(
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src="https://i.ibb.co/g6pGhDV/vegetables-752153-960-720.jpg" alt="vegetable"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="https://i.ibb.co/g6pGhDV/vegetables-752153-960-720.jpg" alt="Fruits"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="https://i.ibb.co/g6pGhDV/vegetables-752153-960-720.jpg" alt="Diary products"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default Search;