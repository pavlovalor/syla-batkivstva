import { AssessmentContainer } from '../components';
import { assessment } from './data';

// Force static generation to ensure this route takes priority over catch-all
export const dynamic = 'force-static';

export default function Sample1AssessmentPage() {
  return <AssessmentContainer assessment={assessment} />;
}
