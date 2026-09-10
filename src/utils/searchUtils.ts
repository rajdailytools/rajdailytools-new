import { EXAMS_DATABASE } from '../data/exams';
import { ADMISSIONS_DATABASE } from '../data/admissions';
import { ActivePage } from '../types/exam';

export interface GlobalSearchResult {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  page: ActivePage;
  slug: string;
  icon: string;
}

export function performGlobalSearch(query: string): GlobalSearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const results: GlobalSearchResult[] = [];

  for (const exam of EXAMS_DATABASE) {
    const examMatch = 
      exam.examName.toLowerCase().includes(q) ||
      exam.organization.toLowerCase().includes(q) ||
      exam.category.toLowerCase().includes(q) ||
      exam.postName.toLowerCase().includes(q);

    if (examMatch) {
      // 1. Recruitment / Latest Job
      results.push({
        id: `${exam.id}-job`,
        title: `${exam.examName} (${exam.totalVacancy})`,
        subtitle: `Latest Job • ${exam.organization}`,
        category: exam.category,
        badge: exam.status === 'APPLICATION_OPEN' ? 'Application Open' : 'Job Details',
        page: 'job-detail',
        slug: exam.slug,
        icon: exam.logoIcon || '📘'
      });

      // 2. Admit Card
      results.push({
        id: `${exam.id}-admit`,
        title: `${exam.examName} Admit Card`,
        subtitle: `Hall Ticket & Exam City • Exam: ${exam.examDate}`,
        category: exam.category,
        badge: exam.status === 'ADMIT_CARD_RELEASED' ? 'Admit Card Released' : 'Admit Card',
        page: 'admit-card-detail',
        slug: exam.slug,
        icon: '🪪'
      });

      // 3. Answer Key
      results.push({
        id: `${exam.id}-answer`,
        title: `${exam.examName} Answer Key`,
        subtitle: `Response Sheet & Score Calculator`,
        category: exam.category,
        badge: exam.answerKeyDate ? 'Answer Key' : 'Notify Soon',
        page: 'answer-key-detail',
        slug: exam.slug,
        icon: '📝'
      });

      // 4. Result
      results.push({
        id: `${exam.id}-result`,
        title: `${exam.examName} Result`,
        subtitle: `Scorecard & Merit List`,
        category: exam.category,
        badge: exam.resultDate ? 'Result Declared' : 'Result',
        page: 'result-detail',
        slug: exam.slug,
        icon: '🏆'
      });

      // 5. Cut Off
      results.push({
        id: `${exam.id}-cutoff`,
        title: `${exam.examName} Cut Off Marks`,
        subtitle: `Category-wise Official & Expected Cutoff`,
        category: exam.category,
        badge: 'Cut Off',
        page: 'cut-off-detail',
        slug: exam.slug,
        icon: '📊'
      });
    }
  }

  for (const adm of ADMISSIONS_DATABASE) {
    if (
      adm.university.toLowerCase().includes(q) ||
      adm.course.toLowerCase().includes(q) ||
      adm.category.toLowerCase().includes(q)
    ) {
      results.push({
        id: `${adm.id}-adm`,
        title: adm.course,
        subtitle: `Admission • ${adm.university}`,
        category: 'Admission',
        badge: adm.status === 'Open' ? 'Admission Open' : 'Closed',
        page: 'admission-detail',
        slug: adm.slug,
        icon: '🎓'
      });
    }
  }

  return results.slice(0, 12);
}
