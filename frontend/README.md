# NavigationBar Component

I have created the NavigationBar using Material Tailwind along with Heroicons for better responsiveness and design. I have implemented a feature where the background color, text color, and logo change as you scroll down. This component is fully responsive.

# Landing Page Component

I have created a text animation that automatically types and removes text using the React Typewriter module. The input field placeholder changes dynamically based on the screen width. Although I attempted to mimic the exact background animation from the provided UI treatment video demo, I wasn't able to achieve the exact effect. I spent considerable time working on the animation, but given the 3-day deadline and the need to focus on building the 'Our Services' component, I decided to implement a different background animation instead. This component is fully responsive.

Performance Optimization: I implemented throttling for the resize event, delaying function calls by a preset interval (200ms) to improve performance.


# Our Services Component

In the 'Our Services' component, the right section remains sticky at the top while the left section scrolls, creating a particular scroll animation effect. To achieve this, I made the right-side image sticky to the top of the viewport. For the scroll animation on the left side, after spending significant time refining it, I decided to add space between each list item that increases and decreases as you scroll. To accomplish this, I used Framer Motion, and for smoother scrolling, I implemented the Lenis module.


## Technologies Used

- React
- Tailwind CSS
- Framer Motion (for animations)
- lenis (for improving the smoothness of scrolling)
- @material-tailwind/react (for components)

## Getting Started

To view the component locally, follow these steps:

1. Navigate to the project folder:
   cd frontend
2. Install the dependencies:
   npm install
3. Start the development server:
   npm run dev
4. Open your browser and go to:
   http://localhost:5173/
