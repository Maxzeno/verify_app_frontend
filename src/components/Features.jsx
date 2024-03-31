import React from "react";

const Features = () => {
  return (
    <section id="features">
      {/* Flex Container */}
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        {/* What's Different */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Verifier?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            We offer affordable and fast verification of your documentents. We
            offer the best user experience and customer support.
          </p>
        </div>

        {/* Numbered List */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          {/* List Item 1 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className="rounded-l-full bg-indigo-500 SupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-indigo-500">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Our services are affordable
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Our services are affordable
              </h3>
              <p className="text-darkGrayishBlue">
                We offer our verification service at a very affordable rate and
                we don't compromise in the value we offer.
              </p>
            </div>
          </div>

          {/* List Item 2 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* Heading */}
            <div className="rounded-l-full bg-indigo-500 SupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-indigo-500">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  We offer rebust customer support
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                We offer rebust customer support
              </h3>
              <p className="text-darkGrayishBlue">
                Ever get stuck or run into an issue we are alway here to help.
                We take customer satisfaction very seriously.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
