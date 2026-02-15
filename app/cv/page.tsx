import { redirect } from 'next/navigation';

export const metadata = {
  title: 'CV'
};

export default function CvPage() {
  redirect('/experience');
}
