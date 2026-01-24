import { APP_SHARED_INFO } from "../config/app-info";

export function getLegalItemasSlugs(): string[] {
  return APP_SHARED_INFO.legalItems.map((item) => item.href);
}
