import { notFound } from 'next/navigation'
import CaseStudy from '../../../components/case-study'
import { CASE_STUDY_DETAILS } from '../../../constant'

export function generateStaticParams() {
  return CASE_STUDY_DETAILS.map((caseStudy) => ({
    slug: caseStudy.slug
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const caseStudy = CASE_STUDY_DETAILS.find((item) => item.slug === slug)

  if (!caseStudy) {
    return {
      title: 'Case Study'
    }
  }

  return {
    title: `${caseStudy.title} Case Study`,
    description: caseStudy.summary
  }
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params
  const caseStudy = CASE_STUDY_DETAILS.find((item) => item.slug === slug)

  if (!caseStudy) {
    notFound()
  }

  return <CaseStudy caseStudy={caseStudy} />
}
