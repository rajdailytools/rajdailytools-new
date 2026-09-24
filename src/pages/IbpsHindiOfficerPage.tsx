import React from 'react';
import { ExamRecord, ActivePage } from '../types/exam';
import { JobDetailPage } from './JobDetailPage';
import { IBPS_HINDI_OFFICER_2026_EXAM } from '../data/ibpsHindiOfficerData';

interface IbpsHindiOfficerPageProps {
  exam?: ExamRecord;
  onNavigate?: (page: ActivePage, slug?: string) => void;
  depth?: number;
}

/**
 * IBPS Hindi Officer Recruitment 2026 Page
 * Locked Master Template reusing JobDetailPage (identical to MPESB MP Police Constable GD master template).
 */
export const IbpsHindiOfficerPage: React.FC<IbpsHindiOfficerPageProps> = ({
  exam = IBPS_HINDI_OFFICER_2026_EXAM,
  onNavigate,
  depth = 0
}) => {
  return <JobDetailPage exam={exam} onNavigate={onNavigate} depth={depth} />;
};
