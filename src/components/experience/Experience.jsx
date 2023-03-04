import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

function Experience(props) {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className=".container experience_container">

                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div><h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Java Script</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Juery</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>React Js</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Node Js</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Mango DB</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>MY SQL</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillPatchCheckFill className="experience_details-icon" />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;