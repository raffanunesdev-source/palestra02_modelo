
export interface LectureTheme {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
