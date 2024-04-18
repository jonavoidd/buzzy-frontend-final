import { useState } from "react";
import { arrowDown, arrowUp } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

interface QuestionCardsProps {
  questions: { question: string; answers: string[] }[];
}

const bgImage = "/assets/background/faq_bg.png";

const Index = () => {
  return (
    <div
      className="w-full h-auto flex justify-center p-16 px-32"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-auto px-24 space-y-12">
        <QuestionCards
          questions={[
            {
              question: "How do I place an order?",
              answers: [
                "Locate our nearest branch by visiting the BUZZY BUZZY website and checking out our interactive map.",
                "Drop by any of our branch locations!",
                "Look for BUZZY BUZZY on Foodpanda.",
              ],
            },
          ]}
        />
        <QuestionCards
          questions={[
            {
              question: "Where are you located?",
              answers: [
                "Find a BUZZY BUZZY branch in your city!",
                "Cebu City",
                "Mandaue City",
                "If you’d like to know our specific location(s), they’ll be announced on our social media pages. Should you have any location suggestions or requests, please don’t hesitate to reach us at pickup@pickup-coffee.com Follow us on Tiktok and like our Facebook page to stay updated with announcements!",
              ],
            },
          ]}
        />
        <QuestionCards
          questions={[
            {
              question: "What are your operating hours?",
              answers: [
                "Buzzy Buzzy café operates daily from 7 am to 7 pm. Any special schedules for holidays will be posted on our social media accounts.",
              ],
            },
          ]}
        />
        <QuestionCards
          questions={[
            {
              question: "Do you provide delivery services?",
              answers: [
                "At the moment, our delivery services are exclusively available through Foodpanda.",
              ],
            },
          ]}
        />
        <QuestionCards
          questions={[
            {
              question: "How do I get a promo code for a free drink?",
              answers: [
                "If you're looking for a free drink promo code, make sure to keep an eye on our social media channels. Every now and then, influencers might give out unique codes as part of their promotions. Just follow their instructions, note down the code you see, and use it at any Buzzy Buzzy cafe to get your free drink.",
              ],
            },
          ]}
        />
        <QuestionCards
          questions={[
            {
              question: "How do I know if a product is available at your cafe?",
              answers: [
                "You can easily check the availability of a product at our cafe by visiting our website or mobile app. Simply navigate to the product section and search for the item you're interested in. Each product listing will indicate its availability status, allowing you to see if it's currently in stock at our café. Additionally, you can contact our customer support team for further assistance regarding product availability and inquiries.",
              ],
            },
          ]}
        />
        <QuestionCards
          questions={[
            {
              question: "Do you offer customization options for your drinks?",
              answers: [
                "Yes, we do offer customization options for our drinks! You can personalize your order by adjusting the sweetness level, adding toppings, or choosing alternative milk options. Simply let our staff know your preferences when placing your order, and we'll be happy to accommodate your requests.",
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

const QuestionCards: React.FC<QuestionCardsProps> = ({ questions }) => {
  const [showAnswers, setShowAnswers] = useState<boolean[]>(
    new Array(questions.length).fill(false)
  );

  const toggleAnswers = (index: number) => {
    const updatedAnswers = [...showAnswers];
    updatedAnswers[index] = !updatedAnswers[index];
    setShowAnswers(updatedAnswers);
  };

  return (
    <>
      {questions.map((questionObj, index) => (
        <div key={index} className="w-full h-auto rounded-xl">
          <div
            className={`w-full h-auto flex items-center bg-[#FFF1DD] shadow-md px-8 ${
              showAnswers[index] ? "rounded-t-xl" : "rounded-xl"
            }`}
          >
            <h1 className="w-full h-12 text-[#E55050] text-xl font-bold flex justify-start items-center uppercase">
              {questionObj.question}
            </h1>
            <IonIcon
              icon={showAnswers[index] ? arrowUp : arrowDown} // Use showAnswers[index]
              className="text-xl text-[#F05347]"
              onClick={() => toggleAnswers(index)}
            />
          </div>
          {showAnswers[index] && (
            <div className="h-auto bg-white p-4 rounded-b-xl">
              <ul className="list-decimal pl-4 text-start">
                {questionObj.answers.map((answer, idx) => (
                  <li key={idx}>{answer}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Index;
