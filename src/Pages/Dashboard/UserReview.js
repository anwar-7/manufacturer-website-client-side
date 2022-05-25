import React from 'react';

const UserReview = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold text-accent">Your Review!</h1>
          <p class="py-6 text-lg">
            Dear User, We provide the best service to our customers. We make the
            best product in the world. Also, we want to improve our product and
            service for our customers. Please give a review about our product
            and service, where we can improve our product and service. We will
            try our best to make our product more valuable for you. Thank you.
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <form>
              <div class="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  class="input input-bordered"
                  required
                />
              </div>
              <div class="form-control mt-2">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  class="input input-bordered"
                  required
                />
              </div>
              <div class="form-control mt-2">
                <input
                  type="text"
                  name="ratings"
                  placeholder="Ratings"
                  class="input input-bordered"
                  required
                />
              </div>
              <div class="form-control mt-2">
                <input
                  type="text"
                  name="image"
                  placeholder="Images Link"
                  class="input input-bordered"
                  required
                />
              </div>
              <div class="form-control mt-2">
                <textarea
                  name="description"
                  placeholder="Review"
                  class="textarea textarea-bordered"
                  required
                ></textarea>
              </div>
              <div class="form-control mt-6">
                <input type="submit" class="btn btn-accent" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
