import React from "react";
import './contact.css';
import 'bootstrap/dist/css/bootstrap.css';

const Contact = () => {
    return (
        <>
            <div className="main-contact">
                <div className="contact-head">
                    <h2>Contact Me</h2>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 for-children">
                            <div class="card">
                                <div class="card-header">
                                    <h5 class="card-title text-center mt-2">Raj Navadiya</h5>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">
                                        <i class="fas fa-phone"></i><span>Mobile:</span>+91 7359119005<br></br>
                                        <i class="fas fa-envelope"></i><span>Email:</span>navadiyaraj333@gmail.com<br></br>
                                        <i class="fas fa-home"></i><span>Address:</span>Sahyog society -1, Surat, Gujarat 
                                    </p>
                                </div>
                                <div class="text-center card-footer">
                                    <a href="https://www.instagram.com/raj_navadiya_972/" target="_blank"><i class="fab fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/rajnavadiya" target="_blank"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://github.com/rajnavadiya972/" target="_blank"><i class="fab fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;