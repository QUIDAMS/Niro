import React from 'react';
import Niro from '../../assets/img/Niro..svg';
import Expand1 from '../../assets/img/Icon/Arrow-down.svg';
import Expand2 from '../../assets/img/Icon/Arrow-down.svg';
import Search from '../../assets/img/Icon/Search.svg';
import Heart from '../../assets/img/Icon/Heart.svg';
import Cart from '../../assets/img/Icon/Cart.svg';
import Avatar from '../../assets/img/user-photo.jpg';


const Nav = ({}) => {
	return (
		<header className="header">
			<div className="container">
				<div className="row nav d-flex align-items-center">
					<div className="col col-md-5">
						<div className="menu d-flex mt-2">
							<a href="#">
								<img className="menu__logo" src={Niro} alt="Niro."/>
							</a>
							<ul className="nav-bar d-flex my-0 p-0">
								<li className="menu__item my-0 py-0 ">Products
									<a href="#">
										<img src={Expand1} alt="expand" className="menu__element"/>
									</a>
								</li>
								<li className="menu__item my-0 py-0">Rooms
									<a href="#">
										<img src={Expand2} alt="expand" className="menu__element"/>
									</a>
								</li>
								<li className="menu__item my-0 py-0"><a href="#">Inspirations</a></li>
							</ul>
						</div>
					</div>
					<div className="col col-md-5 ml-2">
						<div className="input-group menu-search menu-search__items">
							<span className="input-group-text border-0 menu-search__icon">
								<img src={Search} alt="Search"/>
							</span>
							<input className="form-control border-0" type="search" placeholder="Search for minimalist chair" aria-label="Search"/>
						</div>
					</div>
					<div className="col col-md-2 d-flex">
						<div className="menu__icons">
							<a href="#"><img src={Heart} alt="heart" className="menu__img" /></a>
							<a href="#"><img src={Cart} alt="cart" className="menu__img"/></a>
							<a href="#"><img src={Avatar} alt="avatar" className="avatar"/></a>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Nav;