import React from "react";
import UserDetails from "./UserDetails";

class About extends React.Component{
    
    render() {
        return(
            <>
            
                <div className="about_container font-serif font-light">
                <h2 className="font-semibold p-2 m-2">Our Story</h2>
                <p className="mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nisl in dui lacinia suscipit vitae non nulla. Sed vestibulum enim vel dolor bibendum, eget commodo mauris pellentesque.</p>
    
                <h2 className="font-semibold p-2 m-2">Our Mission</h2>
                <p className="mx-2">Nulla non ligula eget odio finibus auctor sed et ex. Nam consectetur interdum felis, sed dignissim dolor feugiat sit amet. Phasellus vehicula magna eu leo tempus fringilla.</p>
    
                <h2 className="font-semibold p-2 m-2">Our Team</h2>
                <p className="mx-2">Meet the talented individuals behind our company:</p>
    
                <UserDetails />
    
                <h2 className="font-semibold p-2 m-2">Contact Us</h2>
                <p className="mx-2">If you have any questions or inquiries, feel free to contact us at <a href="mailto:info@example.com">info@example.com</a>.</p>
                </div>
            </>
           
        );
    }
    
}

export default About;