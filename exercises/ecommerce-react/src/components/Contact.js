const Contact = () => {
    return (
        <main class="container mt-5">
        <h2>Contact Us</h2>
        <form id="contactForm">
          <div class="mb-3">
            <label for="nameInput" class="form-label">Name</label>
            <input type="text" class="form-control" id="nameInput" name="name" placeholder="Your Name" required/>
          </div>
          
          <div class="mb-3">
            <label for="emailInput" class="form-label">Email</label>
            <input type="email" class="form-control" id="emailInput" name="email" placeholder="Your Email" required/>
          </div>
      
        
          <div class="mb-3">
            <label for="phoneInput" class="form-label">Phone Number</label>
            <input type="tel" class="form-control" id="phoneInput" name="phone" placeholder="Your Phone Number"/>
          </div>
      
     
          <div class="mb-3">
            <label for="subjectInput" class="form-label">Subject</label>
            <input type="text" class="form-control" id="subjectInput" name="subject" placeholder="Subject of Your Inquiry"/>
          </div>
      
    
          <div class="mb-3">
            <label for="messageTextarea" class="form-label">Message</label>
            <textarea class="form-control" id="messageTextarea" name="message" rows="4" placeholder="Your Message" required></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </main>
    )
}

export default Contact