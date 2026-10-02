"use client";

import { useEffect } from "react";
import { ArrowIcon } from "./arrow-icon";

type RecruitmentEvent = "careers_page_viewed" | "role_viewed" | "apply_button_clicked";
type AnalyticsWindow = Window & { dataLayer?: Record<string, unknown>[] };

export function trackRecruitment(event: RecruitmentEvent, roleSlug?: string) {
  const payload = { event, ...(roleSlug ? { role_slug: roleSlug } : {}) };
  const analyticsWindow = window as AnalyticsWindow;
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.dataLayer.push(payload);
  window.dispatchEvent(new CustomEvent("recruitment", { detail: payload }));
}

export function RecruitmentView({ roleSlug }: { roleSlug?: string }) {
  useEffect(() => {
    trackRecruitment(roleSlug ? "role_viewed" : "careers_page_viewed", roleSlug);
  }, [roleSlug]);
  return null;
}

export function ApplyLink({ url, roleSlug }: { url: string; roleSlug: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      onClick={() => trackRecruitment("apply_button_clicked", roleSlug)}
      className="careers-button">
      Apply for this role <ArrowIcon />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
