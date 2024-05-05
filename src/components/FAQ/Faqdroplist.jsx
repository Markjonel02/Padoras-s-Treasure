import React, { useState } from "react";

const Faqdroplist = () => {
  const [rotatedItem, setRotatedItem] = useState(null); // Changed to single item state
  const faqitems = [
    {
      questions:
        "What makes Pandora's Treasure unique compared to other cosmetic brands?",
      answers:
        "Pandora's Treasure is committed to using natural and ethically sourced ingredients in its cosmetics and skincare products. Our formulations are free from harmful chemicals and are cruelty-free. We blend ancient beauty secrets with modern technology to deliver effective and luxurious products.",
    },
    {
      questions: "Are Pandora's Treasure products suitable for all skin types?",
      answers:
        "Yes, our products are designed to be gentle yet effective, making them suitable for all skin types, including sensitive skin. However, we recommend doing a patch test before using any new product, especially if you have known allergies or sensitivities.",
    },
    {
      questions:
        "Do Pandora's Treasure products contain any harmful ingredients?",
      answers:
        "No, we prioritize the use of natural and safe ingredients in all our formulations. Our products are free from parabens, sulfates, phthalates, and other potentially harmful chemicals commonly found in skincare and cosmetics.",
    },
    {
      questions: "Are Pandora's Treasure products tested on animals?",
      answers:
        "Absolutely not. We are strongly against animal testing and ensure that all our products are cruelty-free. We conduct thorough testing using human volunteers and advanced laboratory methods to guarantee the safety and efficacy of our products.",
    },
    {
      questions:
        "How should I store my Pandora's Treasure products to maintain their effectiveness?",
      answers:
        "To preserve the potency and quality of our products, store them in a cool, dry place away from direct sunlight. Keep containers tightly closed when not in use to prevent contamination and maintain freshness.",
    },
    {
      questions:
        "Can I use Pandora's Treasure skincare products if I'm pregnant or breastfeeding?",
      answers:
        "While our products are formulated with natural ingredients and are generally safe to use, we recommend consulting with your healthcare provider before incorporating any new skincare products into your routine, especially during pregnancy or while breastfeeding.",
    },
    {
      questions: "Do Pandora's Treasure products offer any SPF protection?",
      answers:
        "Some of our skincare products may contain SPF protection, but it's essential to check the product label for specific information. For optimal sun protection, we recommend using a dedicated sunscreen in addition to your skincare routine, especially if prolonged sun exposure is expected.",
    },
    {
      questions: "What is the shelf life of Pandora's Treasure products?",
      answers:
        "Our products typically have a shelf life of 12 to 24 months, depending on the formulation. To ensure maximum effectiveness, we recommend using the products within this timeframe and observing any expiration dates printed on the packaging.",
    },
    {
      questions: "Are Pandora's Treasure products suitable for men?",
      answers:
        "Yes, our products are suitable for all genders. We believe that everyone deserves access to high-quality skincare and cosmetics, regardless of gender identity.",
    },
  ];
  const handleRotate = (index) => {
    // If the clicked index is already rotated, set it to null
    // This will hide the answer for this item
    if (rotatedItem === index) {
      setRotatedItem(null);
    } else {
      // If a different item is clicked, set it as the rotatedItem
      setRotatedItem(index);
    }
  };

  return (
    <>
      <div className="faq-container mb-32">
        <h1 className=" px-10 text-quaternary dark:text-white flex justify-start xl:justify-start sm:justify-center mb-5 mt-32  font-Roboto-Black text-3xl xl:text-5xl lg:text-4xl md:3xl sm:text-2xl">
          Frequently Asked Questions
        </h1>
        {faqitems.map((item, index) => (
          <div className="faq-wrapper" key={index}>
            <div className="mainwrapper">
              <div className="questions flex justify-center  flex-col px-10">
                <div className="items bg-gray-200 border shadow-lg  rounded-lg flex w-full justify-between items-center mb-5 p-5">
                  <div className="title w-3/4">
                    <h1 className="text-quaternary font-Roboto-Bold text-xl lg:text-2xl">
                      {item.questions}
                    </h1>
                  </div>

                  <div className="icon flex justify-end w-1/4 text-quaternary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-10 h-10  cursor-pointer ${
                        rotatedItem === index ? "rotate-45" : ""
                      }`}
                      onClick={() => handleRotate(index)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className={`answers mb-5 ease-in-out mt-[-25px] border bg-primary ${
                    rotatedItem === index ? "block rounded-b-lg" : "hidden"
                  }`}
                >
                  <p className="text-white text-xl font-Roboto-Medium rounded tracking-wide  p-10 mt-0">
                    {" "}
                    {item.answers}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Faqdroplist;
