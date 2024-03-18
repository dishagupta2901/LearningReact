import React from "react";

const About = () =>{
    return(
        <div className="about_container">
            <h2>Our Story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nisl in dui lacinia suscipit vitae non nulla. Sed vestibulum enim vel dolor bibendum, eget commodo mauris pellentesque.</p>

            <h2>Our Mission</h2>
            <p>Nulla non ligula eget odio finibus auctor sed et ex. Nam consectetur interdum felis, sed dignissim dolor feugiat sit amet. Phasellus vehicula magna eu leo tempus fringilla.</p>

            <h2>Our Team</h2>
            <p>Meet the talented individuals behind our company:</p>
            <ul>
                <li>John Doe - CEO</li>
                <li>Jane Smith - CFO</li>
                <li>David Johnson - CTO</li>
            </ul>

            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, feel free to contact us at <a href="mailto:info@example.com">info@example.com</a>.</p>
        </div>
    );
}

export default About;