import { type Metadata } from 'next';
import { AssessmentContainer } from '../components';
import { assessment } from './data';

// Force static generation to ensure this route takes priority over catch-all
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Визначення стилю батьківства',
};

export default function ParentingStyleAssessmentPage() {
  return <AssessmentContainer assessment={assessment} />;
}
