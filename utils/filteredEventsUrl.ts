import { EventSearchParams } from '@/types/eventSearchForm';

const YEAR_PARAM_PLACEHOLDER = 'any-year';
const ROOT_URL_PART = '/events/archive';
const EMPTY_URL_PART = '';

export function createFilteredEventsUrl(eventSearchParams: EventSearchParams) {
  const yearUrlPart = getYearUrlPart(eventSearchParams);
  const monthUrlPart = getMonthUrlPart(eventSearchParams);

  return `${ROOT_URL_PART}${yearUrlPart}${monthUrlPart}`;
}

function getYearUrlPart(eventSearchParams: EventSearchParams) {
  if (!eventSearchParams.year && eventSearchParams.month) {
    return `/${YEAR_PARAM_PLACEHOLDER}`;
  }

  if (eventSearchParams.year) {
    return `/${eventSearchParams.year}`;
  }

  return EMPTY_URL_PART;
}

function getMonthUrlPart(eventSearchParams: EventSearchParams) {
  if (!!eventSearchParams.month) {
    return `/${eventSearchParams.month}`;
  }

  return EMPTY_URL_PART;
}
