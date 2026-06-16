import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-start justify-center max-w-3xl mx-auto px-8 gap-8">

      {/* Hero section */}
      <div className="flex flex-col gap-2">
        <h1>Designing through a different lens.</h1>
        <h2>Product designer based in New York City And The Greater Kuala Lumpur.</h2>
      </div>

      {/* Divider */}
      <hr className="w-full border-t border-neutral-200" />

      {/* About section */}
      <div className="flex flex-col gap-3">
        <h2>About me.</h2>
        <h3>I am a software engineer who enjoys enhancing lives through thoughtful, human-centred design and code.</h3>
        <p>Currently working at the intersection of machine learning and interface design, I build tools that make complex systems feel simple and approachable. Previously at Apple, Google, and a handful of early-stage startups.</p>
        <p>Outside of work I spend time on photography, reading about type design, and occasionally getting lost in a new city.</p>
      </div>

      {/* Divider */}
      <hr className="w-full border-t border-neutral-200" />

      {/* Projects section */}
      <div className="flex flex-col gap-6">
        <h2>Featured projects.</h2>

        <div className="flex flex-col gap-1">
          <h3>Visual intelligence platform.</h3>
          <h4>Machine learning · 2024</h4>
          <p>A computer vision system that grades and classifies edible bird's nest samples using deep learning and explainable AI, reducing expert grading time by 60% while maintaining consistency across batches.</p>
        </div>

        <div className="flex flex-col gap-1">
          <h3>University forum sentiment analysis. of Professor John Doe Mary And His Friend</h3>
          <h4>Natural language processing · 2024</h4>
          <p>Built and compared classification models using logistic regression, Random Forest, and XGBoost on LIWC-derived features extracted from student forum posts to predict academic engagement patterns.</p>
        </div>

        <div className="flex flex-col gap-1">
          <h3>Institutional bias correction in admissions.</h3>
          <h4>Fairness in ML · 2023</h4>
          <p>Xcode includes a world-class source editor with code completion, source control, and a powerful debugger. Use coding intelligence to explain and write code, analyze bugs, and generate fixes. Add playground macros to run code snippets, and add previews to see your UI as you build it.</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full border-t border-neutral-200" />

      {/* Contact section */}
      <div className="flex flex-col gap-2">
        <h2>Let's work together.</h2>
        <h3>Don't be shy, he doesn't bite.</h3>
        <p>Whether you have a project in mind, a question about my work, or just want to say hello — my inbox is always open. I try to respond within a day or two.</p>
      </div>

      <Card size="sm" className="mx-auto w-full max-w-sm">
        <CardHeader>
          <CardTitle>Small Card</CardTitle>
          <CardDescription>
            This card uses the small size variant.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            The card component supports a size prop that can be set to
            &quot;sm&quot; for a more compact appearance.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full">
            Action
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
