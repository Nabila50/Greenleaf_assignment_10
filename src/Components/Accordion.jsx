import React from "react";

const Accordion = () => {
  return (
    <div className="mb-10 bg-lime-100 py-8">
      <h1 className="text-3xl lobster-regular font-bold text-center mb-8">
        Frequent Question & Answer
      </h1>
      <div className="collapse collapse-arrow lobster-regular bg-lime-50 border border-lime-500">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          How do I create an account?
        </div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
      <div className="collapse collapse-arrow lobster-regular bg-lime-50 border border-lime-500">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          I forgot my password. What should I do?
        </div>
        <div className="collapse-content text-sm">
          Click on "Forgot Password" on the login page and follow the
          instructions sent to your email.
        </div>
      </div>
      <div className="collapse collapse-arrow lobster-regular bg-lime-50 border border-lime-500">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How do I update my profile information?
        </div>
        <div className="collapse-content text-sm">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>
      <div className="collapse collapse-arrow lobster-regular bg-lime-50 border border-lime-500">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How can I get all the tips?
        </div>
        <div className="collapse-content text-sm">
          Go to "Browse Tips" page where you can find all the tips.
        </div>
      </div>
      <div className="collapse collapse-arrow lobster-regular bg-lime-50 border border-lime-500">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How can I share my tips?
        </div>
        <div className="collapse-content text-sm">
          Go to "Share a Garden Tip" page where you can find a form. for sharing your tip you have to fill up the form and check in the "Explore Gardeners" page to see your tips.
        </div>
      </div>
    </div>
  );
};

export default Accordion;
