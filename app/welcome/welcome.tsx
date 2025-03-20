import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import Card from "~/routes/components/Card";

export function Welcome() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
        <Card title = "Vocabulary Quiz" content="Try our native-level vocabulary quizzes, powered by JurnLet API." button="Learn More"/>
        <Card title = "Instructor Board" content="Read interesting articles from our best instructors over the world." button="Sign up"/>
        <Card title = "Journal Interface" content="Design your own journal dashboard with our special tools." button="Get started"/>
    </div>
  );
}

