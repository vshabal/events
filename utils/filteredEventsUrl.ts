import { EventSearchParams } from '@/types/eventSearchForm';

const YEAR_PARAM_PLACEHOLDER = 'any-year';
const ROOT_FILTERED_EVENTS_URL = '/events/archive';
const NO_FILTERS_URL = '/events';
const EMPTY_URL_PART = '';

export function createFilteredEventsUrl(eventSearchParams: EventSearchParams) {
  const yearUrlPart = getYearUrlPart(eventSearchParams);
  const monthUrlPart = getMonthUrlPart(eventSearchParams);
  if (yearUrlPart || monthUrlPart) {
    return `${ROOT_FILTERED_EVENTS_URL}${yearUrlPart}${monthUrlPart}`;
  }

  return NO_FILTERS_URL;
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

export function getEventSearchParamsFromSlug(slug: string[]) {
  const yearSlug = slug[0];
  const monthSlug = slug[1];
  const isYearDefined = yearSlug && yearSlug !== YEAR_PARAM_PLACEHOLDER;
  const defaultParamValue = '';

  return {
    year: isYearDefined ? yearSlug : defaultParamValue,
    month: monthSlug ? monthSlug : defaultParamValue
  };
}
