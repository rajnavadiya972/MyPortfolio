import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Project.css';
import contact from './contact.PNG';
import news from './news.PNG';
import todo from './todo.PNG';


const Project = () => {
    return (
        <>
            <div className="main-project">
                <div className="project-head">
                    <h2>Project</h2>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-4 for-child">
                            <a href="https://smart-contact-manager-production.up.railway.app" target="_blank" class="card-link">
                                <div class="card">
                                    <img src={contact} class="card-img-top" alt="SmartContactManager" />
                                    <div class="card-body">
                                        <h3 class="card-title text-center my-3">Smart Contact Manager</h3>
                                        <p class="card-text">A smart contact manager is a Web application that allows users to create an account and conveniently store their contacts in one place. With this contact manager, users can efficiently manage their personal or professional contacts. The application typically offers features such as adding, editing, and deleting contacts.Users can store essential information like names, phone numbers, email addresses, and additional notes for each contact.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 for-child">
                            <a href="https://github.com/rajnavadiya972/NewsWebApp" target="_blank" class="card-link">
                                <div class="card">
                                    <img src={news} class="card-img-top" alt="News Web Application" />
                                    <div class="card-body">
                                        <h3 class="card-title text-center my-3">Voice assistant news web-app</h3>
                                        <p class="card-text">The News App will provide a platformwheremedia reporter can post news articles. User
                                            and media reporter can listen a news by AlanAI assistant.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-4 for-child">
                            <a href="https://rajnavadiya972.github.io/ToDo-List/" target="_blank" class="card-link">
                                <div class="card">
                                    <img src={todo} class="card-img-top" alt="ToDo Web Application" />
                                    <div class="card-body">
                                        <h3 class="card-title text-center my-3">To-Do List</h3>
                                        <p class="card-text">A todo list web app is a digital tool that allows users to create, manage, and organize tasks or items they need to accomplish.Users can add, delete, and update tasks, set deadlines, and sometimes collaborate with others on shared lists.</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;