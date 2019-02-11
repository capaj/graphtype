
import { Graphtype, t } from '../src/index'


// ENUMS 
enum ProjectCardArchivedState {
  'ARCHIVED', 
	'NOT_ARCHIVED'
}

enum RepositoryPrivacy {
  'PUBLIC', 
	'PRIVATE'
}

enum RepositoryOrderField {
  'CREATED_AT', 
	'UPDATED_AT', 
	'PUSHED_AT', 
	'NAME', 
	'STARGAZERS'
}

enum OrderDirection {
  'ASC', 
	'DESC'
}

enum RepositoryAffiliation {
  'OWNER', 
	'COLLABORATOR', 
	'ORGANIZATION_MEMBER'
}

enum SubscriptionState {
  'UNSUBSCRIBED', 
	'SUBSCRIBED', 
	'IGNORED'
}

enum StarOrderField {
  'STARRED_AT'
}

enum RepositoryLockReason {
  'MOVING', 
	'BILLING', 
	'RENAME', 
	'MIGRATING'
}

enum PullRequestState {
  'OPEN', 
	'CLOSED', 
	'MERGED'
}

enum IssueOrderField {
  'CREATED_AT', 
	'UPDATED_AT', 
	'COMMENTS'
}

enum CommentAuthorAssociation {
  'MEMBER', 
	'OWNER', 
	'COLLABORATOR', 
	'CONTRIBUTOR', 
	'FIRST_TIME_CONTRIBUTOR', 
	'FIRST_TIMER', 
	'NONE'
}

enum CommentCannotUpdateReason {
  'INSUFFICIENT_ACCESS', 
	'LOCKED', 
	'LOGIN_REQUIRED', 
	'MAINTENANCE', 
	'VERIFIED_EMAIL_REQUIRED', 
	'DENIED'
}

enum IssueState {
  'OPEN', 
	'CLOSED'
}

enum LockReason {
  'OFF_TOPIC', 
	'TOO_HEATED', 
	'RESOLVED', 
	'SPAM'
}

enum ReactionContent {
  'THUMBS_UP', 
	'THUMBS_DOWN', 
	'LAUGH', 
	'HOORAY', 
	'CONFUSED', 
	'HEART', 
	'ROCKET', 
	'EYES'
}

enum ReactionOrderField {
  'CREATED_AT'
}

enum GitSignatureState {
  'VALID', 
	'INVALID', 
	'MALFORMED_SIG', 
	'UNKNOWN_KEY', 
	'BAD_EMAIL', 
	'UNVERIFIED_EMAIL', 
	'NO_USER', 
	'UNKNOWN_SIG_TYPE', 
	'UNSIGNED', 
	'GPGVERIFY_UNAVAILABLE', 
	'GPGVERIFY_ERROR', 
	'NOT_SIGNING_KEY', 
	'EXPIRED_KEY', 
	'OCSP_PENDING', 
	'OCSP_ERROR', 
	'BAD_CERT', 
	'OCSP_REVOKED'
}

enum StatusState {
  'EXPECTED', 
	'ERROR', 
	'FAILURE', 
	'PENDING', 
	'SUCCESS'
}

enum MergeableState {
  'MERGEABLE', 
	'CONFLICTING', 
	'UNKNOWN'
}

enum MilestoneState {
  'OPEN', 
	'CLOSED'
}

enum TeamOrderField {
  'NAME'
}

enum OrganizationInvitationType {
  'USER', 
	'EMAIL'
}

enum OrganizationInvitationRole {
  'DIRECT_MEMBER', 
	'ADMIN', 
	'BILLING_MANAGER', 
	'REINSTATE'
}

enum TeamMembershipType {
  'IMMEDIATE', 
	'CHILD_TEAM', 
	'ALL'
}

enum TeamMemberRole {
  'MAINTAINER', 
	'MEMBER'
}

enum TeamMemberOrderField {
  'LOGIN', 
	'CREATED_AT'
}

enum TeamPrivacy {
  'SECRET', 
	'VISIBLE'
}

enum TeamRepositoryOrderField {
  'CREATED_AT', 
	'UPDATED_AT', 
	'PUSHED_AT', 
	'NAME', 
	'PERMISSION', 
	'STARGAZERS'
}

enum RepositoryPermission {
  'ADMIN', 
	'WRITE', 
	'READ'
}

enum PullRequestReviewState {
  'PENDING', 
	'COMMENTED', 
	'APPROVED', 
	'CHANGES_REQUESTED', 
	'DISMISSED'
}

enum PullRequestReviewCommentState {
  'PENDING', 
	'SUBMITTED'
}

enum DeploymentStatusState {
  'PENDING', 
	'SUCCESS', 
	'FAILURE', 
	'INACTIVE', 
	'ERROR'
}

enum DeploymentState {
  'ABANDONED', 
	'ACTIVE', 
	'DESTROYED', 
	'ERROR', 
	'FAILURE', 
	'INACTIVE', 
	'PENDING'
}

enum CollaboratorAffiliation {
  'OUTSIDE', 
	'DIRECT', 
	'ALL'
}

enum LanguageOrderField {
  'SIZE'
}

enum MilestoneOrderField {
  'DUE_DATE', 
	'CREATED_AT', 
	'UPDATED_AT', 
	'NUMBER'
}

enum ProjectOrderField {
  'CREATED_AT', 
	'UPDATED_AT', 
	'NAME'
}

enum ProjectState {
  'OPEN', 
	'CLOSED'
}

enum RefOrderField {
  'TAG_COMMIT_DATE', 
	'ALPHABETICAL'
}

enum ReleaseOrderField {
  'CREATED_AT', 
	'NAME'
}

enum GistPrivacy {
  'PUBLIC', 
	'SECRET', 
	'ALL'
}

enum GistOrderField {
  'CREATED_AT', 
	'UPDATED_AT', 
	'PUSHED_AT'
}

enum RepositoryContributionType {
  'COMMIT', 
	'ISSUE', 
	'PULL_REQUEST', 
	'REPOSITORY', 
	'PULL_REQUEST_REVIEW'
}

enum ProjectCardState {
  'CONTENT_ONLY', 
	'NOTE_ONLY', 
	'REDACTED'
}

enum ProjectColumnPurpose {
  'TODO', 
	'IN_PROGRESS', 
	'DONE'
}

enum OrganizationMemberRole {
  'MEMBER', 
	'ADMIN'
}

enum TeamRole {
  'ADMIN', 
	'MEMBER'
}

enum SearchType {
  'ISSUE', 
	'REPOSITORY', 
	'USER'
}

enum SecurityAdvisoryOrderField {
  'PUBLISHED_AT', 
	'UPDATED_AT'
}

enum SecurityAdvisoryIdentifierType {
  'CVE', 
	'GHSA'
}

enum SecurityAdvisorySeverity {
  'LOW', 
	'MODERATE', 
	'HIGH', 
	'CRITICAL'
}

enum SecurityVulnerabilityOrderField {
  'UPDATED_AT'
}

enum SecurityAdvisoryEcosystem {
  'RUBYGEMS', 
	'NPM', 
	'PIP', 
	'MAVEN', 
	'NUGET'
}

enum PullRequestReviewEvent {
  'COMMENT', 
	'APPROVE', 
	'REQUEST_CHANGES', 
	'DISMISS'
}

enum TopicSuggestionDeclineReason {
  'NOT_RELEVANT', 
	'TOO_SPECIFIC', 
	'PERSONAL_PREFERENCE', 
	'TOO_GENERAL'
}

enum DefaultRepositoryPermissionField {
  'NONE', 
	'READ', 
	'WRITE', 
	'ADMIN'
}

enum PullRequestOrderField {
  'CREATED_AT', 
	'UPDATED_AT'
}

enum IssuePubSubTopic {
  'UPDATED', 
	'MARKASREAD', 
	'TIMELINE', 
	'STATE'
}

enum PullRequestPubSubTopic {
  'UPDATED', 
	'MARKASREAD', 
	'HEAD_REF', 
	'TIMELINE', 
	'STATE'
}

enum PullRequestTimelineItemsItemType {
  'PULL_REQUEST_COMMIT', 
	'PULL_REQUEST_COMMIT_COMMENT_THREAD', 
	'PULL_REQUEST_REVIEW', 
	'PULL_REQUEST_REVIEW_THREAD', 
	'PULL_REQUEST_REVISION_MARKER', 
	'BASE_REF_CHANGED_EVENT', 
	'BASE_REF_FORCE_PUSHED_EVENT', 
	'DEPLOYED_EVENT', 
	'DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT', 
	'HEAD_REF_DELETED_EVENT', 
	'HEAD_REF_FORCE_PUSHED_EVENT', 
	'HEAD_REF_RESTORED_EVENT', 
	'MERGED_EVENT', 
	'REVIEW_DISMISSED_EVENT', 
	'REVIEW_REQUESTED_EVENT', 
	'REVIEW_REQUEST_REMOVED_EVENT', 
	'ISSUE_COMMENT', 
	'CROSS_REFERENCED_EVENT', 
	'ADDED_TO_PROJECT_EVENT', 
	'ASSIGNED_EVENT', 
	'CLOSED_EVENT', 
	'COMMENT_DELETED_EVENT', 
	'CONVERTED_NOTE_TO_ISSUE_EVENT', 
	'DEMILESTONED_EVENT', 
	'LABELED_EVENT', 
	'LOCKED_EVENT', 
	'MENTIONED_EVENT', 
	'MILESTONED_EVENT', 
	'MOVED_COLUMNS_IN_PROJECT_EVENT', 
	'PINNED_EVENT', 
	'REFERENCED_EVENT', 
	'REMOVED_FROM_PROJECT_EVENT', 
	'RENAMED_TITLE_EVENT', 
	'REOPENED_EVENT', 
	'SUBSCRIBED_EVENT', 
	'TRANSFERRED_EVENT', 
	'UNASSIGNED_EVENT', 
	'UNLABELED_EVENT', 
	'UNLOCKED_EVENT', 
	'UNPINNED_EVENT', 
	'UNSUBSCRIBED_EVENT'
}

enum IssueTimelineItemsItemType {
  'ISSUE_COMMENT', 
	'CROSS_REFERENCED_EVENT', 
	'ADDED_TO_PROJECT_EVENT', 
	'ASSIGNED_EVENT', 
	'CLOSED_EVENT', 
	'COMMENT_DELETED_EVENT', 
	'CONVERTED_NOTE_TO_ISSUE_EVENT', 
	'DEMILESTONED_EVENT', 
	'LABELED_EVENT', 
	'LOCKED_EVENT', 
	'MENTIONED_EVENT', 
	'MILESTONED_EVENT', 
	'MOVED_COLUMNS_IN_PROJECT_EVENT', 
	'PINNED_EVENT', 
	'REFERENCED_EVENT', 
	'REMOVED_FROM_PROJECT_EVENT', 
	'RENAMED_TITLE_EVENT', 
	'REOPENED_EVENT', 
	'SUBSCRIBED_EVENT', 
	'TRANSFERRED_EVENT', 
	'UNASSIGNED_EVENT', 
	'UNLABELED_EVENT', 
	'UNLOCKED_EVENT', 
	'UNPINNED_EVENT', 
	'UNSUBSCRIBED_EVENT'
}

enum RepositoryCollaboratorAffiliation {
  'ALL', 
	'OUTSIDE'
}

enum ReportedContentClassifiers {
  'SPAM', 
	'ABUSE', 
	'OFF_TOPIC', 
	'OUTDATED', 
	'RESOLVED'
}
// INTERFACES 
export const INode = {
	id: t.ID
}

export const IActor = {
	avatarUrl: t.String, 
	login: t.String, 
	resourcePath: t.String, 
	url: t.String
}

export const IRegistryPackageOwner = {
	id: t.ID
}

export const IRegistryPackageSearch = {
	id: t.ID
}

export const IProjectOwner = {
	id: t.ID, 
	projectsResourcePath: t.String, 
	projectsUrl: t.String, 
	viewerCanCreateProjects: t.Boolean
}

export const IClosable = {
	closed: t.Boolean, 
	closedAt: t.nullable.DateTime
}

export const IUpdatable = {
	viewerCanUpdate: t.Boolean
}

export const IAssignable = {
	
}

export const IRepositoryOwner = {
	avatarUrl: t.String, 
	id: t.ID, 
	login: t.String, 
	resourcePath: t.String, 
	url: t.String
}

export const ISubscribable = {
	id: t.ID, 
	viewerCanSubscribe: t.Boolean, 
	viewerSubscription: t.nullable.enum(SubscriptionState)
}

export const IStarrable = {
	id: t.ID, 
	viewerHasStarred: t.Boolean
}

export const IUniformResourceLocatable = {
	resourcePath: t.String, 
	url: t.String
}

export const IRepositoryInfo = {
	createdAt: t.DateTime, 
	description: t.nullable.String, 
	descriptionHTML: t.String, 
	forkCount: t.Int, 
	hasIssuesEnabled: t.Boolean, 
	hasWikiEnabled: t.Boolean, 
	homepageUrl: t.nullable.String, 
	isArchived: t.Boolean, 
	isFork: t.Boolean, 
	isLocked: t.Boolean, 
	isMirror: t.Boolean, 
	isPrivate: t.Boolean, 
	lockReason: t.nullable.enum(RepositoryLockReason), 
	mirrorUrl: t.nullable.String, 
	name: t.String, 
	nameWithOwner: t.String, 
	pushedAt: t.nullable.DateTime, 
	resourcePath: t.String, 
	shortDescriptionHTML: t.String, 
	updatedAt: t.DateTime, 
	url: t.String
}

export const IComment = {
	authorAssociation: t.enum(CommentAuthorAssociation), 
	body: t.String, 
	bodyHTML: t.String, 
	bodyText: t.String, 
	createdAt: t.DateTime, 
	createdViaEmail: t.Boolean, 
	id: t.ID, 
	includesCreatedEdit: t.Boolean, 
	lastEditedAt: t.nullable.DateTime, 
	publishedAt: t.nullable.DateTime, 
	updatedAt: t.DateTime, 
	viewerDidAuthor: t.Boolean
}

export const IUpdatableComment = {
	viewerCannotUpdateReasons: t.enum(CommentCannotUpdateReason)
}

export const ILabelable = {
	
}

export const ILockable = {
	activeLockReason: t.nullable.enum(LockReason), 
	locked: t.Boolean
}

export const IReactable = {
	databaseId: t.nullable.Int, 
	id: t.ID, 
	viewerCanReact: t.Boolean
}

export const IRepositoryNode = {
	
}

export const IDeletable = {
	viewerCanDelete: t.Boolean
}

export const IGitObject = {
	abbreviatedOid: t.String, 
	commitResourcePath: t.String, 
	commitUrl: t.String, 
	id: t.ID
}

export const IGitSignature = {
	email: t.String, 
	isValid: t.Boolean, 
	payload: t.String, 
	signature: t.String, 
	state: t.enum(GitSignatureState), 
	wasSignedByGitHub: t.Boolean
}

export const IContribution = {
	isRestricted: t.Boolean, 
	occurredAt: t.DateTime, 
	resourcePath: t.String, 
	url: t.String
}
// OBJECT TYPES 
export const OTQuery = {
	
}

export const OTCodeOfConduct = {
	body: t.nullable.String, 
	key: t.String, 
	name: t.String, 
	url: t.nullable.String
}

export const OTLicense = {
	body: t.String, 
	description: t.nullable.String, 
	featured: t.Boolean, 
	hidden: t.Boolean, 
	id: t.ID, 
	implementation: t.nullable.String, 
	key: t.String, 
	name: t.String, 
	nickname: t.nullable.String, 
	pseudoLicense: t.Boolean, 
	spdxId: t.nullable.String, 
	url: t.nullable.String
}

export const OTLicenseRule = {
	description: t.String, 
	key: t.String, 
	label: t.String
}

export const OTMarketplaceCategory = {
	description: t.nullable.String, 
	howItWorks: t.nullable.String, 
	id: t.ID, 
	name: t.String, 
	primaryListingCount: t.Int, 
	resourcePath: t.String, 
	secondaryListingCount: t.Int, 
	slug: t.String, 
	url: t.String
}

export const OTMarketplaceListing = {
	companyUrl: t.nullable.String, 
	configurationResourcePath: t.String, 
	configurationUrl: t.String, 
	documentationUrl: t.nullable.String, 
	extendedDescription: t.nullable.String, 
	extendedDescriptionHTML: t.String, 
	fullDescription: t.String, 
	fullDescriptionHTML: t.String, 
	hasApprovalBeenRequested: t.Boolean, 
	hasPublishedFreeTrialPlans: t.Boolean, 
	hasTermsOfService: t.Boolean, 
	howItWorks: t.nullable.String, 
	howItWorksHTML: t.String, 
	id: t.ID, 
	installationUrl: t.nullable.String, 
	installedForViewer: t.Boolean, 
	isApproved: t.Boolean, 
	isDelisted: t.Boolean, 
	isDraft: t.Boolean, 
	isPaid: t.Boolean, 
	isRejected: t.Boolean, 
	logoBackgroundColor: t.String, 
	logoUrl: t.nullable.String, 
	name: t.String, 
	normalizedShortDescription: t.String, 
	pricingUrl: t.nullable.String, 
	privacyPolicyUrl: t.String, 
	resourcePath: t.String, 
	screenshotUrls: t.String, 
	shortDescription: t.String, 
	slug: t.String, 
	statusUrl: t.nullable.String, 
	supportEmail: t.nullable.String, 
	supportUrl: t.String, 
	termsOfServiceUrl: t.nullable.String, 
	url: t.String, 
	viewerCanAddPlans: t.Boolean, 
	viewerCanApprove: t.Boolean, 
	viewerCanDelist: t.Boolean, 
	viewerCanEdit: t.Boolean, 
	viewerCanEditCategories: t.Boolean, 
	viewerCanEditPlans: t.Boolean, 
	viewerCanRedraft: t.Boolean, 
	viewerCanReject: t.Boolean, 
	viewerCanRequestApproval: t.Boolean, 
	viewerHasPurchased: t.Boolean, 
	viewerHasPurchasedForAllOrganizations: t.Boolean, 
	viewerIsListingAdmin: t.Boolean
}

export const OTApp = {
	createdAt: t.DateTime, 
	databaseId: t.nullable.Int, 
	description: t.nullable.String, 
	id: t.ID, 
	logoBackgroundColor: t.String, 
	logoUrl: t.String, 
	name: t.String, 
	slug: t.String, 
	updatedAt: t.DateTime, 
	url: t.String
}

export const OTMarketplaceListingConnection = {
	totalCount: t.Int
}

export const OTMarketplaceListingEdge = {
	cursor: t.String
}

export const OTPageInfo = {
	endCursor: t.nullable.String, 
	hasNextPage: t.Boolean, 
	hasPreviousPage: t.Boolean, 
	startCursor: t.nullable.String
}

export const OTGitHubMetadata = {
	gitIpAddresses: t.nullable.String, 
	hookIpAddresses: t.nullable.String, 
	importerIpAddresses: t.nullable.String, 
	isPasswordAuthenticationVerifiable: t.Boolean, 
	pagesIpAddresses: t.nullable.String
}

export const OTOrganization = {
	avatarUrl: t.String, 
	databaseId: t.nullable.Int, 
	description: t.nullable.String, 
	email: t.nullable.String, 
	id: t.ID, 
	isVerified: t.Boolean, 
	location: t.nullable.String, 
	login: t.String, 
	name: t.nullable.String, 
	newTeamResourcePath: t.String, 
	newTeamUrl: t.String, 
	organizationBillingEmail: t.nullable.String, 
	projectsResourcePath: t.String, 
	projectsUrl: t.String, 
	requiresTwoFactorAuthentication: t.nullable.Boolean, 
	resourcePath: t.String, 
	teamsResourcePath: t.String, 
	teamsUrl: t.String, 
	url: t.String, 
	viewerCanAdminister: t.Boolean, 
	viewerCanCreateProjects: t.Boolean, 
	viewerCanCreateRepositories: t.Boolean, 
	viewerCanCreateTeams: t.Boolean, 
	viewerIsAMember: t.Boolean, 
	websiteUrl: t.nullable.String
}

export const OTProject = {
	body: t.nullable.String, 
	bodyHTML: t.String, 
	closed: t.Boolean, 
	closedAt: t.nullable.DateTime, 
	createdAt: t.DateTime, 
	databaseId: t.nullable.Int, 
	id: t.ID, 
	name: t.String, 
	number: t.Int, 
	resourcePath: t.String, 
	state: t.enum(ProjectState), 
	updatedAt: t.DateTime, 
	url: t.String, 
	viewerCanUpdate: t.Boolean
}

export const OTProjectColumnConnection = {
	totalCount: t.Int
}

export const OTProjectColumnEdge = {
	cursor: t.String
}

export const OTProjectColumn = {
	createdAt: t.DateTime, 
	databaseId: t.nullable.Int, 
	id: t.ID, 
	name: t.String, 
	purpose: t.nullable.enum(ProjectColumnPurpose), 
	resourcePath: t.String, 
	updatedAt: t.DateTime, 
	url: t.String
}

export const OTProjectCardConnection = {
	totalCount: t.Int
}

export const OTProjectCardEdge = {
	cursor: t.String
}

export const OTProjectCard = {
	createdAt: t.DateTime, 
	databaseId: t.nullable.Int, 
	id: t.ID, 
	isArchived: t.Boolean, 
	note: t.nullable.String, 
	resourcePath: t.String, 
	state: t.nullable.enum(ProjectCardState), 
	updatedAt: t.DateTime, 
	url: t.String
}

export const OTIssue = {
	activeLockReason: t.nullable.enum(LockReason), 
	authorAssociation: t.enum(CommentAuthorAssociation), 
	body: t.String, 
	bodyHTML: t.String, 
	bodyText: t.String, 
	closed: t.Boolean, 
	closedAt: t.nullable.DateTime, 
	createdAt: t.DateTime, 
	createdViaEmail: t.Boolean, 
	databaseId: t.nullable.Int, 
	id: t.ID, 
	includesCreatedEdit: t.Boolean, 
	lastEditedAt: t.nullable.DateTime, 
	locked: t.Boolean, 
	number: t.Int, 
	publishedAt: t.nullable.DateTime, 
	resourcePath: t.String, 
	state: t.enum(IssueState), 
	title: t.String, 
	updatedAt: t.DateTime, 
	url: t.String, 
	viewerCanReact: t.Boolean, 
	viewerCanSubscribe: t.Boolean, 
	viewerCanUpdate: t.Boolean, 
	viewerCannotUpdateReasons: t.enum(CommentCannotUpdateReason), 
	viewerDidAuthor: t.Boolean, 
	viewerSubscription: t.nullable.enum(SubscriptionState)
}

export const OTUserConnection = {
	totalCount: t.Int
}

export const OTUserEdge = {
	cursor: t.String
}

export const OTUser = {
	avatarUrl: t.String, 
	bio: t.nullable.String, 
	bioHTML: t.String, 
	company: t.nullable.String, 
	companyHTML: t.String, 
	createdAt: t.DateTime, 
	databaseId: t.nullable.Int, 
	email: t.String, 
	id: t.ID, 
	isBountyHunter: t.Boolean, 
	isCampusExpert: t.Boolean, 
	isDeveloperProgramMember: t.Boolean, 
	isEmployee: t.Boolean, 
	isHireable: t.Boolean, 
	isSiteAdmin: t.Boolean, 
	isViewer: t.Boolean, 
	location: t.nullable.String, 
	login: t.String, 
	name: t.nullable.String, 
	resourcePath: t.String, 
	updatedAt: t.DateTime, 
	url: t.String, 
	viewerCanFollow: t.Boolean, 
	viewerIsFollowing: t.Boolean, 
	websiteUrl: t.nullable.String
}

export const OTRepositoryConnection = {
	totalCount: t.Int, 
	totalDiskUsage: t.Int
}

export const OTRepositoryEdge = {
	cursor: t.String
}

export const OTRepository = {
	createdAt: t.DateTime, 
	databaseId: t.nullable.Int, 
	description: t.nullable.String, 
	descriptionHTML: t.String, 
	diskUsage: t.nullable.Int, 
	forkCount: t.Int, 
	hasIssuesEnabled: t.Boolean, 
	hasWikiEnabled: t.Boolean, 
	homepageUrl: t.nullable.String, 
	id: t.ID, 
	isArchived: t.Boolean, 
	isFork: t.Boolean, 
	isLocked: t.Boolean, 
	isMirror: t.Boolean, 
	isPrivate: t.Boolean, 
	lockReason: t.nullable.enum(RepositoryLockReason), 
	mergeCommitAllowed: t.Boolean, 
	mirrorUrl: t.nullable.String, 
	name: t.String, 
	nameWithOwner: t.String, 
	projectsResourcePath: t.String, 
	projectsUrl: t.String, 
	pushedAt: t.nullable.DateTime, 
	rebaseMergeAllowed: t.Boolean, 
	resourcePath: t.String, 
	shortDescriptionHTML: t.String, 
	squashMergeAllowed: t.Boolean, 
	updatedAt: t.DateTime, 
	url: t.String, 
	viewerCanAdminister: t.Boolean, 
	viewerCanCreateProjects: t.Boolean, 
	viewerCanSubscribe: t.Boolean, 
	viewerCanUpdateTopics: t.Boolean, 
	viewerHasStarred: t.Boolean, 
	viewerPermission: t.nullable.enum(RepositoryPermission), 
	viewerSubscription: t.nullable.enum(SubscriptionState)
}

export const OTStargazerConnection = {
	totalCount: t.Int
}

export const OTStargazerEdge = {
	cursor: t.String, 
	starredAt: t.DateTime
}

export const OTBranchProtectionRuleConnection = {
	totalCount: t.Int
}

export const OTBranchProtectionRuleEdge = {
	cursor: t.String
}

export const OTBranchProtectionRule = {
	databaseId: t.nullable.Int, 
	dismissesStaleReviews: t.Boolean, 
	id: t.ID, 
	isAdminEnforced: t.Boolean, 
	pattern: t.String, 
	requiredApprovingReviewCount: t.nullable.Int, 
	requiredStatusCheckContexts: t.nullable.String, 
	requiresApprovingReviews: t.Boolean, 
	requiresCommitSignatures: t.Boolean, 
	requiresStatusChecks: t.Boolean, 
	requiresStrictStatusChecks: t.Boolean, 
	restrictsPushes: t.Boolean, 
	restrictsReviewDismissals: t.Boolean
}

export const OTBranchProtectionRuleConflictConnection = {
	totalCount: t.Int
}

export const OTBranchProtectionRuleConflictEdge = {
	cursor: t.String
}

export const OTBranchProtectionRuleConflict = {
	
}

export const OTRef = {
	id: t.ID, 
	name: t.String, 
	prefix: t.String
}

export const OTPullRequestConnection = {
	totalCount: t.Int
}

export const OTPullRequestEdge = {
	cursor: t.String
}

export const OTPullRequest = {
	activeLockReason: t.nullable.enum(LockReason), 
	additions: t.Int, 
	authorAssociation: t.enum(CommentAuthorAssociation), 
	baseRefName: t.String, 
	body: t.String, 
	bodyHTML: t.String, 
	bodyText: t.String, 
	changedFiles: t.Int, 
	closed: t.Boolean, 
	closedAt: t.nullable.DateTime, 
	createdAt: t.DateTime, 
	createdViaEmail: t.Boolean, 
	databaseId: t.nullable.Int, 
	deletions: t.Int, 
	headRefName: t.String, 
	id: t.ID, 
	includesCreatedEdit: t.Boolean, 
	isCrossRepository: t.Boolean, 
	lastEditedAt: t.nullable.DateTime, 
	locked: t.Boolean, 
	maintainerCanModify: t.Boolean, 
	mergeable: t.enum(MergeableState), 
	merged: t.Boolean, 
	mergedAt: t.nullable.DateTime, 
	number: t.Int, 
	permalink: t.String, 
	publishedAt: t.nullable.DateTime, 
	resourcePath: t.String, 
	revertResourcePath: t.String, 
	revertUrl: t.String, 
	state: t.enum(PullRequestState), 
	title: t.String, 
	updatedAt: t.DateTime, 
	url: t.String, 
	viewerCanApplySuggestion: t.Boolean, 
	viewerCanReact: t.Boolean, 
	viewerCanSubscribe: t.Boolean, 
	viewerCanUpdate: t.Boolean, 
	viewerCannotUpdateReasons: t.enum(CommentCannotUpdateReason), 
	viewerDidAuthor: t.Boolean, 
	viewerSubscription: t.nullable.enum(SubscriptionState)
}

export const OTUserContentEditConnection = {
	totalCount: t.Int
}

export const OTUserContentEditEdge = {
	cursor: t.String
}

export const OTUserContentEdit = {
	createdAt: t.DateTime, 
	deletedAt: t.nullable.DateTime, 
	diff: t.nullable.String, 
	editedAt: t.DateTime, 
	id: t.ID, 
	updatedAt: t.DateTime
}

export const OTLabelConnection = {
	totalCount: t.Int
}

export const OTLabelEdge = {
	cursor: t.String
}

export const OTLabel = {
	color: t.String, 
	createdAt: t.nullable.DateTime, 
	description: t.nullable.String, 
	id: t.ID, 
	isDefault: t.Boolean, 
	name: t.String, 
	resourcePath: t.String, 
	updatedAt: t.nullable.DateTime, 
	url: t.String
}

export const OTIssueConnection = {
	totalCount: t.Int
}

export const OTIssueEdge = {
	cursor: t.String
}

export const OTReactionGroup = {
	content: t.enum(ReactionContent), 
	createdAt: t.nullable.DateTime, 
	viewerHasReacted: t.Boolean
}

export const OTReactingUserConnection = {
	totalCount: t.Int
}

export const OTReactingUserEdge = {
	cursor: t.String, 
	reactedAt: t.DateTime
}

export const OTReactionConnection = {
	totalCount: t.Int, 
	viewerHasReacted: t.Boolean
}

export const OTReactionEdge = {
	cursor: t.String
}

export const OTReaction = {
	content: t.enum(ReactionContent), 
	createdAt: t.DateTime, 
	databaseId: t.nullable.Int, 
	id: t.ID
}

export const OTIssueCommentConnection = {
	totalCount: t.Int
}

export const OTIssueCommentEdge = {
	cursor: t.String
}

export const OTIssueComment = {
	authorAssociation: t.enum(CommentAuthorAssociation), 
	body: t.String, 
	bodyHTML: t.String, 
	bodyText: t.String, 
	createdAt: t.DateTime, 
	createdViaEmail: t.Boolean, 
	databaseId: t.nullable.Int, 
	id: t.ID, 
	includesCreatedEdit: t.Boolean, 
	isMinimized: t.Boolean, 
	lastEditedAt: t.nullable.DateTime, 
	minimizedReason: t.nullable.String, 
	publishedAt: t.nullable.DateTime, 
	resourcePath: t.String, 
	updatedAt: t.DateTime, 
	url: t.String, 
	viewerCanDelete: t.Boolean, 
	viewerCanMinimize: t.Boolean, 
	viewerCanReact: t.Boolean, 
	viewerCanUpdate: t.Boolean, 
	viewerCannotUpdateReasons: t.enum(CommentCannotUpdateReason), 
	viewerDidAuthor: t.Boolean
}

export const OTPullRequestCommitConnection = {
	totalCount: t.Int
}

export const OTPullRequestCommitEdge = {
	cursor: t.String
}

export const OTPullRequestCommit = {
	id: t.ID, 
	resourcePath: t.String, 
	url: t.String
}

export const OTCommit = {
	abbreviatedOid: t.String, 
	additions: t.Int, 
	authoredByCommitter: t.Boolean, 
	authoredDate: t.DateTime, 
	changedFiles: t.Int, 
	commitResourcePath: t.String, 
	commitUrl: t.String, 
	committedDate: t.DateTime, 
	committedViaWeb: t.Boolean, 
	deletions: t.Int, 
	id: t.ID, 
	message: t.String, 
	messageBody: t.String, 
	messageBodyHTML: t.String, 
	messageHeadline: t.String, 
	messageHeadlineHTML: t.String, 
	pushedDate: t.nullable.DateTime, 
	resourcePath: t.String, 
	tarballUrl: t.String, 
	treeResourcePath: t.String, 
	treeUrl: t.String, 
	url: t.String, 
	viewerCanSubscribe: t.Boolean, 
	viewerSubscription: t.nullable.enum(SubscriptionState), 
	zipballUrl: t.String
}

export const OTGitActor = {
	avatarUrl: t.String, 
	email: t.nullable.String, 
	name: t.nullable.String
}

export const OTBlame = {
	
}

export const OTBlameRange = {
	age: t.Int, 
	endingLine: t.Int, 
	startingLine: t.Int
}

export const OTCommitCommentConnection = {
	totalCount: t.Int
}

export const OTCommitCommentEdge = {
	cursor: t.String
}

export const OTCommitComment = {
	authorAssociation: t.enum(CommentAuthorAssociation), 
	body: t.String, 
	bodyHTML: t.String, 
	bodyText: t.String, 
	createdAt: t.DateTime, 
	createdViaEmail: t.Boolean, 
	databaseId: t.nullable.Int, 
	id: t.ID, 
	includesCreatedEdit: t.Boolean, 
	isMinimized: t.Boolean, 
	lastEditedAt: t.nullable.DateTime, 
	minimizedReason: t.nullable.String, 
	path: t.nullable.String, 
	position: t.nullable.Int, 
	publishedAt: t.nullable.DateTime, 
	resourcePath: t.String, 
	updatedAt: t.DateTime, 
	url: t.String, 
	viewerCanDelete: t.Boolean, 
	viewerCanMinimize: t.Boolean, 
	viewerCanReact: t.Boolean, 
	viewerCanUpdate: t.Boolean, 
	viewerCannotUpdateReasons: t.enum(CommentCannotUpdateReason), 
	viewerDidAuthor: t.Boolean
}

export const OTCommitHistoryConnection = {
	totalCount: t.Int
}

export const OTCommitEdge = {
	cursor: t.String
}

export const OTCommitConnection = {
	totalCount: t.Int
}

export const OTStatus = {
	id: t.ID, 
	state: t.enum(StatusState)
}

export const OTStatusContext = {
	context: t.String, 
	createdAt: t.DateTime, 
	description: t.nullable.String, 
	id: t.ID, 
	state: t.enum(StatusState), 
	targetUrl: t.nullable.String
}

export const OTTree = {
	abbreviatedOid: t.String, 
	commitResourcePath: t.String, 
	commitUrl: t.String, 
	id: t.ID
}

export const OTTreeEntry = {
	mode: t.Int, 
	name: t.String, 
	type: t.String
}

export const OTMilestone = {
	closed: t.Boolean, 
	closedAt: t.nullable.DateTime, 
	createdAt: t.DateTime, 
	description: t.nullable.String, 
	dueOn: t.nullable.DateTime, 
	id: t.ID, 
	number: t.Int, 
	resourcePath: t.String, 
	state: t.enum(MilestoneState), 
	title: t.String, 
	updatedAt: t.DateTime, 
	url: t.String
}

export const OTReviewRequestConnection = {
	totalCount: t.Int
}

export const OTReviewRequestEdge = {
	cursor: t.String
}

export const OTReviewRequest = {
	databaseId: t.nullable.Int, 
	id: t.ID
}

export const OTTeam = {
	avatarUrl: t.nullable.String, 
	combinedSlug: t.String, 
	createdAt: t.DateTime, 
	description: t.nullable.String, 
	editTeamResourcePath: t.String, 
	editTeamUrl: t.String, 
	id: t.ID, 
	membersResourcePath: t.String, 
	membersUrl: t.String, 
	name: t.String, 
	newTeamResourcePath: t.String, 
	newTeamUrl: t.String, 
	privacy: t.enum(TeamPrivacy), 
	repositoriesResourcePath: t.String, 
	repositoriesUrl: t.String, 
	resourcePath: t.String, 
	slug: t.String, 
	teamsResourcePath: t.String, 
	teamsUrl: t.String, 
	updatedAt: t.DateTime, 
	url: t.String, 
	viewerCanAdminister: t.Boolean, 
	viewerCanSubscribe: t.Boolean, 
	viewerSubscription: t.nullable.enum(SubscriptionState)
}

export const OTTeamConnection = {
	totalCount: t.Int
}

export const OTTeamEdge = {
	cursor: t.String
}

export const OTOrganizationInvitationConnection = {
	totalCount: t.Int
}

export const OTOrganizationInvitationEdge = {
	cursor: t.String
}

export const OTOrganizationInvitation = {
	createdAt: t.DateTime, 
	email: t.nullable.String, 
	id: t.ID, 
	invitationType: t.enum(OrganizationInvitationType), 
	role: t.enum(OrganizationInvitationRole)
}

export const OTTeamMemberConnection = {
	totalCount: t.Int
}

export const OTTeamMemberEdge = {
	cursor: t.String, 
	memberAccessResourcePath: t.String, 
	memberAccessUrl: t.String, 
	role: t.enum(TeamMemberRole)
}

export const OTTeamRepositoryConnection = {
	totalCount: t.Int
}

export const OTTeamRepositoryEdge = {
	cursor: t.String, 
	permission: t.enum(RepositoryPermission)
}

export const OTPullRequestReviewConnection = {
	totalCount: t.Int
}

export const OTPullRequestReviewEdge = {
	cursor: t.String
}

export const OTPullRequestReview = {
	authorAssociation: t.enum(CommentAuthorAssociation), 
	body: t.String, 
	bodyHTML: t.String, 
	bodyText: t.String, 
	createdAt: t.DateTime, 
	createdViaEmail: t.Boolean, 
	databaseId: t.nullable.Int, 
	id: t.ID, 
	includesCreatedEdit: t.Boolean, 
	lastEditedAt: t.nullable.DateTime, 
	publishedAt: t.nullable.DateTime, 
	resourcePath: t.String, 
	state: t.enum(PullRequestReviewState), 
	submittedAt: t.nullable.DateTime, 
	updatedAt: t.DateTime, 
	url: t.String, 
	viewerCanDelete: t.Boolean, 
	viewerCanReact: t.Boolean, 
	viewerCanUpdate: t.Boolean, 
	viewerCannotUpdateReasons: t.enum(CommentCannotUpdateReason), 
	viewerDidAuthor: t.Boolean
}

export const OTPullRequestReviewCommentConnection = {
	totalCount: t.Int
}

export const OTPullRequestReviewCommentEdge = {
	cursor: t.String
}

export const OTPullRequestReviewComment = {
	authorAssociation: t.enum(CommentAuthorAssociation), 
	body: t.String, 
	bodyHTML: t.String, 
	bodyText: t.String, 
	createdAt: t.DateTime, 
	createdViaEmail: t.Boolean, 
	databaseId: t.nullable.Int, 
	diffHunk: t.String, 
	draftedAt: t.DateTime, 
	id: t.ID, 
	includesCreatedEdit: t.Boolean, 
	isMinimized: t.Boolean, 
	lastEditedAt: t.nullable.DateTime, 
	minimizedReason: t.nullable.String, 
	originalPosition: t.Int, 
	outdated: t.Boolean, 
	path: t.String, 
	position: t.nullable.Int, 
	publishedAt: t.nullable.DateTime, 
	resourcePath: t.String, 
	state: t.enum(PullRequestReviewCommentState), 
	updatedAt: t.DateTime, 
	url: t.String, 
	viewerCanDelete: t.Boolean, 
	viewerCanMinimize: t.Boolean, 
	viewerCanReact: t.Boolean, 
	viewerCanUpdate: t.Boolean, 
	viewerCannotUpdateReasons: t.enum(CommentCannotUpdateReason), 
	viewerDidAuthor: t.Boolean
}

export const OTSuggestedReviewer = {
	isAuthor: t.Boolean, 
	isCommenter: t.Boolean
}

export const OTPullRequestTimelineConnection = {
	totalCount: t.Int
}

export const OTPullRequestTimelineItemEdge = {
	cursor: t.String
}

export const OTCommitCommentThread = {
	id: t.ID, 
	path: t.nullable.String, 
	position: t.nullable.Int
}

export const OTPullRequestReviewThread = {
	id: t.ID
}

export const OTClosedEvent = {
	createdAt: t.DateTime, 
	id: t.ID, 
	resourcePath: t.String, 
	url: t.String
}

export const OTReopenedEvent = {
	createdAt: t.DateTime, 
	id: t.ID
}

export const OTSubscribedEvent = {
	createdAt: t.DateTime, 
	id: t.ID
}

export const OTUnsubscribedEvent = {
	createdAt: t.DateTime, 
	id: t.ID
}

export const OTMergedEvent = {
	createdAt: t.DateTime, 
	id: t.ID, 
	mergeRefName: t.String, 
	resourcePath: t.String, 
	url: t.String
}

export const OTReferencedEvent = {
	createdAt: t.DateTime, 
	id: t.ID, 
	isCrossRepository: t.Boolean, 
	isDirectReference: t.Boolean
}

export const OTCrossReferencedEvent = {
	createdAt: t.DateTime, 
	id: t.ID, 
	isCrossRepository: t.Boolean, 
	referencedAt: t.DateTime, 
	resourcePath: t.String, 
	url: t.String, 
	willCloseTarget: t.Boolean
}

export const OTAssignedEvent = {
	createdAt: t.DateTime, 
	id: t.ID
}

export const OTUnassignedEvent = {
	createdAt: t.DateTime, 
	id: t.ID
}

export const OTLabeledEvent = {
	createdAt: t.DateTime, 
	id: t.ID
}

export const OTUnlabeledEvent = {
	createdAt: t.DateTime, 
	id: t.ID
}

export const OTMilestonedEvent = {
	createdAt: t.DateTime, 
	id: t.ID, 
	milestoneTitle: t.String
}

export const OTDemilestonedEvent = {
	createdAt: t.DateTime, 
	id: t.ID, 
	milestoneTitle: t.String
}

export const OTRenamedTitleEvent = {
	createdAt: t.DateTime, 
	currentTitle: t.String, 
	id: t.ID, 
	previousTitle: t.String
}

export const OTLockedEvent = {
	createdAt: t.DateTime, 
	id: t.ID, 
	lockReason: t.nullable.enum(LockReason)
}

export const OTUnlockedEvent = {
	createdAt: t.DateTime, 
	id: t.ID
}

export const OTDeployedEvent = {
	createdAt: t.DateTime, 
	databaseId: t.nullable.Int, 
	id: t.ID
}

export const OTDeployment = {
	commitOid: t.String, 
	createdAt: t.DateTime, 
	databaseId: t.nullable.Int, 
	description: t.nullable.String, 
	environment: t.nullable.String, 
	id: t.ID, 
	payload: t.nullable.String, 
	state: t.nullable.enum(DeploymentState), 
	task: t.nullable.String, 
	updatedAt: t.DateTime
}

export const OTDeploymentStatus = {
	createdAt: t.DateTime, 
	description: t.nullable.String, 
	environmentUrl: t.nullable.String, 
	id: t.ID, 
	logUrl: t.nullable.String, 
	state: t.enum(DeploymentStatusState), 
	updatedAt: t.DateTime
}

export const OTDeploymentStatusConnection = {
	totalCount: t.Int
}

export const OTDeploymentStatusEdge = {
	cursor: t.String
}

export const OTDeploymentEnvironmentChangedEvent = {
	createdAt: t.DateTime, 
	id: t.ID
}

export const OTHeadRefDeletedEvent = {
	createdAt: t.DateTime, 
	headRefName: t.String, 
	id: t.ID
}

export const OTHeadRefRestoredEvent = {
	createdAt: t.DateTime, 
	id: t.ID
}

export const OTHeadRefForcePushedEvent = {
	createdAt: t.DateTime, 
	id: t.ID
}

export const OTBaseRefForcePushedEvent = {
	createdAt: t.DateTime, 
	id: t.ID
}

export const OTReviewRequestedEvent = {
	createdAt: t.DateTime, 
	id: t.ID
}

export const OTReviewRequestRemovedEvent = {
	createdAt: t.DateTime, 
	id: t.ID
}

export const OTReviewDismissedEvent = {
	createdAt: t.DateTime, 
	databaseId: t.nullable.Int, 
	id: t.ID, 
	message: t.String, 
	messageHtml: t.String, 
	previousReviewState: t.enum(PullRequestReviewState), 
	resourcePath: t.String, 
	url: t.String
}

export const OTRefConnection = {
	totalCount: t.Int
}

export const OTRefEdge = {
	cursor: t.String
}

export const OTPushAllowanceConnection = {
	totalCount: t.Int
}

export const OTPushAllowanceEdge = {
	cursor: t.String
}

export const OTPushAllowance = {
	id: t.ID
}

export const OTReviewDismissalAllowanceConnection = {
	totalCount: t.Int
}

export const OTReviewDismissalAllowanceEdge = {
	cursor: t.String
}

export const OTReviewDismissalAllowance = {
	id: t.ID
}

export const OTRepositoryCollaboratorConnection = {
	totalCount: t.Int
}

export const OTRepositoryCollaboratorEdge = {
	cursor: t.String, 
	permission: t.enum(RepositoryPermission)
}

export const OTDeployKeyConnection = {
	totalCount: t.Int
}

export const OTDeployKeyEdge = {
	cursor: t.String
}

export const OTDeployKey = {
	createdAt: t.DateTime, 
	id: t.ID, 
	key: t.String, 
	readOnly: t.Boolean, 
	title: t.String, 
	verified: t.Boolean
}

export const OTDeploymentConnection = {
	totalCount: t.Int
}

export const OTDeploymentEdge = {
	cursor: t.String
}

export const OTLanguageConnection = {
	totalCount: t.Int, 
	totalSize: t.Int
}

export const OTLanguageEdge = {
	cursor: t.String, 
	size: t.Int
}

export const OTLanguage = {
	color: t.nullable.String, 
	id: t.ID, 
	name: t.String
}

export const OTMilestoneConnection = {
	totalCount: t.Int
}

export const OTMilestoneEdge = {
	cursor: t.String
}

export const OTProjectConnection = {
	totalCount: t.Int
}

export const OTProjectEdge = {
	cursor: t.String
}

export const OTProtectedBranchConnection = {
	totalCount: t.Int
}

export const OTProtectedBranchEdge = {
	cursor: t.String
}

export const OTProtectedBranch = {
	hasDismissableStaleReviews: t.Boolean, 
	hasRequiredReviews: t.Boolean, 
	hasRequiredStatusChecks: t.Boolean, 
	hasRestrictedPushes: t.Boolean, 
	hasRestrictedReviewDismissals: t.Boolean, 
	hasStrictRequiredStatusChecks: t.Boolean, 
	id: t.ID, 
	isAdminEnforced: t.Boolean, 
	name: t.String, 
	requiredStatusCheckContexts: t.nullable.String
}

export const OTRelease = {
	createdAt: t.DateTime, 
	description: t.nullable.String, 
	id: t.ID, 
	isDraft: t.Boolean, 
	isPrerelease: t.Boolean, 
	name: t.nullable.String, 
	publishedAt: t.nullable.DateTime, 
	resourcePath: t.String, 
	tagName: t.String, 
	updatedAt: t.DateTime, 
	url: t.String
}

export const OTReleaseAssetConnection = {
	totalCount: t.Int
}

export const OTReleaseAssetEdge = {
	cursor: t.String
}

export const OTReleaseAsset = {
	contentType: t.String, 
	createdAt: t.DateTime, 
	downloadCount: t.Int, 
	downloadUrl: t.String, 
	id: t.ID, 
	name: t.String, 
	size: t.Int, 
	updatedAt: t.DateTime, 
	url: t.String
}

export const OTReleaseConnection = {
	totalCount: t.Int
}

export const OTReleaseEdge = {
	cursor: t.String
}

export const OTRepositoryTopicConnection = {
	totalCount: t.Int
}

export const OTRepositoryTopicEdge = {
	cursor: t.String
}

export const OTRepositoryTopic = {
	id: t.ID, 
	resourcePath: t.String, 
	url: t.String
}

export const OTTopic = {
	id: t.ID, 
	name: t.String, 
	viewerHasStarred: t.Boolean
}

export const OTContributionsCollection = {
	doesEndInCurrentMonth: t.Boolean, 
	endedAt: t.DateTime, 
	hasActivityInThePast: t.Boolean, 
	hasAnyContributions: t.Boolean, 
	hasAnyRestrictedContributions: t.Boolean, 
	isSingleDay: t.Boolean, 
	restrictedContributionsCount: t.Int, 
	startedAt: t.DateTime, 
	totalCommitContributions: t.Int, 
	totalIssueContributions: t.Int, 
	totalPullRequestContributions: t.Int, 
	totalPullRequestReviewContributions: t.Int, 
	totalRepositoriesWithContributedCommits: t.Int, 
	totalRepositoriesWithContributedIssues: t.Int, 
	totalRepositoriesWithContributedPullRequestReviews: t.Int, 
	totalRepositoriesWithContributedPullRequests: t.Int, 
	totalRepositoryContributions: t.Int
}

export const OTContributionCalendar = {
	colors: t.String, 
	isHalloween: t.Boolean, 
	totalContributions: t.Int
}

export const OTContributionCalendarMonth = {
	name: t.String, 
	totalWeeks: t.Int, 
	year: t.Int
}

export const OTContributionCalendarWeek = {
	
}

export const OTContributionCalendarDay = {
	color: t.String, 
	contributionCount: t.Int, 
	weekday: t.Int
}

export const OTCreatedIssueContribution = {
	isRestricted: t.Boolean, 
	occurredAt: t.DateTime, 
	resourcePath: t.String, 
	url: t.String
}

export const OTRestrictedContribution = {
	isRestricted: t.Boolean, 
	occurredAt: t.DateTime, 
	resourcePath: t.String, 
	url: t.String
}

export const OTCreatedPullRequestContribution = {
	isRestricted: t.Boolean, 
	occurredAt: t.DateTime, 
	resourcePath: t.String, 
	url: t.String
}

export const OTCreatedIssueContributionConnection = {
	totalCount: t.Int
}

export const OTCreatedIssueContributionEdge = {
	cursor: t.String
}

export const OTJoinedGitHubContribution = {
	isRestricted: t.Boolean, 
	occurredAt: t.DateTime, 
	resourcePath: t.String, 
	url: t.String
}

export const OTFollowerConnection = {
	totalCount: t.Int
}

export const OTFollowingConnection = {
	totalCount: t.Int
}

export const OTGist = {
	createdAt: t.DateTime, 
	description: t.nullable.String, 
	id: t.ID, 
	isPublic: t.Boolean, 
	name: t.String, 
	pushedAt: t.nullable.DateTime, 
	updatedAt: t.DateTime, 
	viewerHasStarred: t.Boolean
}

export const OTGistCommentConnection = {
	totalCount: t.Int
}

export const OTGistCommentEdge = {
	cursor: t.String
}

export const OTGistComment = {
	authorAssociation: t.enum(CommentAuthorAssociation), 
	body: t.String, 
	bodyHTML: t.String, 
	bodyText: t.String, 
	createdAt: t.DateTime, 
	createdViaEmail: t.Boolean, 
	databaseId: t.nullable.Int, 
	id: t.ID, 
	includesCreatedEdit: t.Boolean, 
	isMinimized: t.Boolean, 
	lastEditedAt: t.nullable.DateTime, 
	minimizedReason: t.nullable.String, 
	publishedAt: t.nullable.DateTime, 
	updatedAt: t.DateTime, 
	viewerCanDelete: t.Boolean, 
	viewerCanMinimize: t.Boolean, 
	viewerCanUpdate: t.Boolean, 
	viewerCannotUpdateReasons: t.enum(CommentCannotUpdateReason), 
	viewerDidAuthor: t.Boolean
}

export const OTGistConnection = {
	totalCount: t.Int
}

export const OTGistEdge = {
	cursor: t.String
}

export const OTOrganizationConnection = {
	totalCount: t.Int
}

export const OTOrganizationEdge = {
	cursor: t.String
}

export const OTPublicKeyConnection = {
	totalCount: t.Int
}

export const OTPublicKeyEdge = {
	cursor: t.String
}

export const OTPublicKey = {
	id: t.ID, 
	key: t.String
}

export const OTStarredRepositoryConnection = {
	totalCount: t.Int
}

export const OTStarredRepositoryEdge = {
	cursor: t.String, 
	starredAt: t.DateTime
}

export const OTIssueTimelineConnection = {
	totalCount: t.Int
}

export const OTIssueTimelineItemEdge = {
	cursor: t.String
}

export const OTTransferredEvent = {
	createdAt: t.DateTime, 
	id: t.ID
}

export const OTOrganizationMemberConnection = {
	totalCount: t.Int
}

export const OTOrganizationMemberEdge = {
	cursor: t.String, 
	role: t.nullable.enum(OrganizationMemberRole)
}

export const OTOrganizationIdentityProvider = {
	digestMethod: t.nullable.String, 
	id: t.ID, 
	issuer: t.nullable.String, 
	signatureMethod: t.nullable.String, 
	ssoUrl: t.nullable.String
}

export const OTExternalIdentityConnection = {
	totalCount: t.Int
}

export const OTExternalIdentityEdge = {
	cursor: t.String
}

export const OTExternalIdentity = {
	guid: t.String, 
	id: t.ID
}

export const OTExternalIdentitySamlAttributes = {
	nameId: t.nullable.String
}

export const OTExternalIdentityScimAttributes = {
	username: t.nullable.String
}

export const OTRateLimit = {
	cost: t.Int, 
	limit: t.Int, 
	nodeCount: t.Int, 
	remaining: t.Int, 
	resetAt: t.DateTime
}

export const OTSearchResultItemConnection = {
	codeCount: t.Int, 
	issueCount: t.Int, 
	repositoryCount: t.Int, 
	userCount: t.Int, 
	wikiCount: t.Int
}

export const OTSearchResultItemEdge = {
	cursor: t.String
}

export const OTTextMatch = {
	fragment: t.String, 
	property: t.String
}

export const OTTextMatchHighlight = {
	beginIndice: t.Int, 
	endIndice: t.Int, 
	text: t.String
}

export const OTSecurityAdvisoryConnection = {
	totalCount: t.Int
}

export const OTSecurityAdvisoryEdge = {
	cursor: t.String
}

export const OTSecurityAdvisory = {
	databaseId: t.nullable.Int, 
	description: t.String, 
	ghsaId: t.String, 
	id: t.ID, 
	publishedAt: t.DateTime, 
	severity: t.enum(SecurityAdvisorySeverity), 
	summary: t.String, 
	updatedAt: t.DateTime, 
	withdrawnAt: t.nullable.DateTime
}

export const OTSecurityAdvisoryIdentifier = {
	type: t.String, 
	value: t.String
}

export const OTSecurityAdvisoryReference = {
	url: t.String
}

export const OTSecurityVulnerabilityConnection = {
	totalCount: t.Int
}

export const OTSecurityVulnerabilityEdge = {
	cursor: t.String
}

export const OTSecurityVulnerability = {
	severity: t.enum(SecurityAdvisorySeverity), 
	updatedAt: t.DateTime, 
	vulnerableVersionRange: t.String
}

export const OTSecurityAdvisoryPackageVersion = {
	identifier: t.String
}

export const OTSecurityAdvisoryPackage = {
	ecosystem: t.enum(SecurityAdvisoryEcosystem), 
	name: t.String
}

export const OTMutation = {
	
}

export const OTAcceptTopicSuggestionPayload = {
	clientMutationId: t.nullable.String
}

export const OTAddCommentPayload = {
	clientMutationId: t.nullable.String
}

export const OTAddProjectCardPayload = {
	clientMutationId: t.nullable.String
}

export const OTAddProjectColumnPayload = {
	clientMutationId: t.nullable.String
}

export const OTAddPullRequestReviewPayload = {
	clientMutationId: t.nullable.String
}

export const OTAddPullRequestReviewCommentPayload = {
	clientMutationId: t.nullable.String
}

export const OTAddReactionPayload = {
	clientMutationId: t.nullable.String
}

export const OTAddStarPayload = {
	clientMutationId: t.nullable.String
}

export const OTCreateBranchProtectionRulePayload = {
	clientMutationId: t.nullable.String
}

export const OTCreateProjectPayload = {
	clientMutationId: t.nullable.String
}

export const OTDeclineTopicSuggestionPayload = {
	clientMutationId: t.nullable.String
}

export const OTDeleteBranchProtectionRulePayload = {
	clientMutationId: t.nullable.String
}

export const OTDeleteProjectPayload = {
	clientMutationId: t.nullable.String
}

export const OTDeleteProjectCardPayload = {
	clientMutationId: t.nullable.String, 
	deletedCardId: t.nullable.ID
}

export const OTDeleteProjectColumnPayload = {
	clientMutationId: t.nullable.String, 
	deletedColumnId: t.nullable.ID
}

export const OTDeletePullRequestReviewPayload = {
	clientMutationId: t.nullable.String
}

export const OTDismissPullRequestReviewPayload = {
	clientMutationId: t.nullable.String
}

export const OTLockLockablePayload = {
	clientMutationId: t.nullable.String
}

export const OTMoveProjectCardPayload = {
	clientMutationId: t.nullable.String
}

export const OTMoveProjectColumnPayload = {
	clientMutationId: t.nullable.String
}

export const OTRemoveOutsideCollaboratorPayload = {
	clientMutationId: t.nullable.String
}

export const OTRemoveReactionPayload = {
	clientMutationId: t.nullable.String
}

export const OTRemoveStarPayload = {
	clientMutationId: t.nullable.String
}

export const OTRequestReviewsPayload = {
	clientMutationId: t.nullable.String
}

export const OTSubmitPullRequestReviewPayload = {
	clientMutationId: t.nullable.String
}

export const OTUnlockLockablePayload = {
	clientMutationId: t.nullable.String
}

export const OTUpdateBranchProtectionRulePayload = {
	clientMutationId: t.nullable.String
}

export const OTUpdateProjectPayload = {
	clientMutationId: t.nullable.String
}

export const OTUpdateProjectCardPayload = {
	clientMutationId: t.nullable.String
}

export const OTUpdateProjectColumnPayload = {
	clientMutationId: t.nullable.String
}

export const OTUpdatePullRequestReviewPayload = {
	clientMutationId: t.nullable.String
}

export const OTUpdatePullRequestReviewCommentPayload = {
	clientMutationId: t.nullable.String
}

export const OTUpdateSubscriptionPayload = {
	clientMutationId: t.nullable.String
}

export const OTUpdateTopicsPayload = {
	clientMutationId: t.nullable.String, 
	invalidTopicNames: t.nullable.String
}

export const OTRepositoryInvitationEdge = {
	cursor: t.String
}

export const OTRepositoryInvitation = {
	id: t.ID, 
	permission: t.enum(RepositoryPermission)
}

export const OTBot = {
	avatarUrl: t.String, 
	createdAt: t.DateTime, 
	databaseId: t.nullable.Int, 
	id: t.ID, 
	login: t.String, 
	resourcePath: t.String, 
	updatedAt: t.DateTime, 
	url: t.String
}

export const OTBlob = {
	abbreviatedOid: t.String, 
	byteSize: t.Int, 
	commitResourcePath: t.String, 
	commitUrl: t.String, 
	id: t.ID, 
	isBinary: t.Boolean, 
	isTruncated: t.Boolean, 
	text: t.nullable.String
}

export const OTPullRequestTimelineItemsEdge = {
	cursor: t.String
}

export const OTBaseRefChangedEvent = {
	createdAt: t.DateTime, 
	databaseId: t.nullable.Int, 
	id: t.ID
}

export const OTAddedToProjectEvent = {
	createdAt: t.DateTime, 
	databaseId: t.nullable.Int, 
	id: t.ID
}

export const OTCommentDeletedEvent = {
	createdAt: t.DateTime, 
	databaseId: t.nullable.Int, 
	id: t.ID
}

export const OTConvertedNoteToIssueEvent = {
	createdAt: t.DateTime, 
	databaseId: t.nullable.Int, 
	id: t.ID
}

export const OTMentionedEvent = {
	createdAt: t.DateTime, 
	databaseId: t.nullable.Int, 
	id: t.ID
}

export const OTMovedColumnsInProjectEvent = {
	createdAt: t.DateTime, 
	databaseId: t.nullable.Int, 
	id: t.ID
}

export const OTPinnedEvent = {
	createdAt: t.DateTime, 
	id: t.ID
}

export const OTRemovedFromProjectEvent = {
	createdAt: t.DateTime, 
	databaseId: t.nullable.Int, 
	id: t.ID
}

export const OTUnpinnedEvent = {
	createdAt: t.DateTime, 
	id: t.ID
}

export const OTIssueTimelineItemsEdge = {
	cursor: t.String
}

export const OTTopicConnection = {
	totalCount: t.Int
}

export const OTTopicEdge = {
	cursor: t.String
}

export const OTCreatedPullRequestContributionConnection = {
	totalCount: t.Int
}

export const OTCreatedPullRequestContributionEdge = {
	cursor: t.String
}

export const OTAppEdge = {
	cursor: t.String
}

export const OTContentAttachment = {
	body: t.String, 
	databaseId: t.Int, 
	id: t.ID, 
	title: t.String
}

export const OTContentReference = {
	databaseId: t.Int, 
	id: t.ID, 
	reference: t.String
}

export const OTGpgSignature = {
	email: t.String, 
	isValid: t.Boolean, 
	keyId: t.nullable.String, 
	payload: t.String, 
	signature: t.String, 
	state: t.enum(GitSignatureState), 
	wasSignedByGitHub: t.Boolean
}

export const OTSmimeSignature = {
	email: t.String, 
	isValid: t.Boolean, 
	payload: t.String, 
	signature: t.String, 
	state: t.enum(GitSignatureState), 
	wasSignedByGitHub: t.Boolean
}

export const OTTag = {
	abbreviatedOid: t.String, 
	commitResourcePath: t.String, 
	commitUrl: t.String, 
	id: t.ID, 
	message: t.nullable.String, 
	name: t.String
}

export const OTUnknownSignature = {
	email: t.String, 
	isValid: t.Boolean, 
	payload: t.String, 
	signature: t.String, 
	state: t.enum(GitSignatureState), 
	wasSignedByGitHub: t.Boolean
}

type maybe<T> = T | null
interface IQuery{}
interface IMutation{}
interface ISubscription{}
interface IARGQuery{}
interface IARGMutation{}
interface IARGSubscriptio{}
// INTERFACES 
type INode = {
	id: string
} & (ILicense | IMarketplaceCategory | IMarketplaceListing | IApp | IOrganization | IProject | IProjectColumn | IProjectCard | IIssue | IUser | IRepository | IBranchProtectionRule | IRef | IPullRequest | IUserContentEdit | ILabel | IReaction | IIssueComment | IPullRequestCommit | ICommit | ICommitComment | IStatus | IStatusContext | ITree | IMilestone | IReviewRequest | ITeam | IOrganizationInvitation | IPullRequestReview | IPullRequestReviewComment | ICommitCommentThread | IPullRequestReviewThread | IClosedEvent | IReopenedEvent | ISubscribedEvent | IUnsubscribedEvent | IMergedEvent | IReferencedEvent | ICrossReferencedEvent | IAssignedEvent | IUnassignedEvent | ILabeledEvent | IUnlabeledEvent | IMilestonedEvent | IDemilestonedEvent | IRenamedTitleEvent | ILockedEvent | IUnlockedEvent | IDeployedEvent | IDeployment | IDeploymentStatus | IDeploymentEnvironmentChangedEvent | IHeadRefDeletedEvent | IHeadRefRestoredEvent | IHeadRefForcePushedEvent | IBaseRefForcePushedEvent | IReviewRequestedEvent | IReviewRequestRemovedEvent | IReviewDismissedEvent | IPushAllowance | IReviewDismissalAllowance | IDeployKey | ILanguage | IProtectedBranch | IRelease | IReleaseAsset | IRepositoryTopic | ITopic | IGist | IGistComment | IPublicKey | ITransferredEvent | IOrganizationIdentityProvider | IExternalIdentity | ISecurityAdvisory | IRepositoryInvitation | IBot | IBlob | IBaseRefChangedEvent | IAddedToProjectEvent | ICommentDeletedEvent | IConvertedNoteToIssueEvent | IMentionedEvent | IMovedColumnsInProjectEvent | IPinnedEvent | IRemovedFromProjectEvent | IUnpinnedEvent | ITag)

type IActor = {
	avatarUrl: string, 
	login: string, 
	resourcePath: string, 
	url: string
} & (IOrganization | IUser | IBot)

type IRegistryPackageOwner = {
	id: string
} & (IOrganization | IUser | IRepository)

type IRegistryPackageSearch = {
	id: string
} & (IOrganization | IUser)

type IProjectOwner = {
	id: string, 
	project: maybe<IProject>, 
	projects: IProjectConnection, 
	projectsResourcePath: string, 
	projectsUrl: string, 
	viewerCanCreateProjects: boolean
} & (IOrganization | IRepository)

type IClosable = {
	closed: boolean, 
	closedAt: maybe<string>
} & (IProject | IIssue | IPullRequest | IMilestone)

type IUpdatable = {
	viewerCanUpdate: boolean
} & (IProject | IIssue | IPullRequest | IIssueComment | ICommitComment | IPullRequestReview | IPullRequestReviewComment | IGistComment)

type IAssignable = {
	assignees: IUserConnection
} & (IIssue | IPullRequest)

type IRepositoryOwner = {
	avatarUrl: string, 
	id: string, 
	login: string, 
	pinnedRepositories: IRepositoryConnection, 
	repositories: IRepositoryConnection, 
	repository: maybe<IRepository>, 
	resourcePath: string, 
	url: string
} & (IOrganization | IUser)

type ISubscribable = {
	id: string, 
	viewerCanSubscribe: boolean, 
	viewerSubscription: maybe<SubscriptionState>
} & (IIssue | IRepository | IPullRequest | ICommit | ITeam)

type IStarrable = {
	id: string, 
	stargazers: IStargazerConnection, 
	viewerHasStarred: boolean
} & (IRepository | ITopic | IGist)

type IUniformResourceLocatable = {
	resourcePath: string, 
	url: string
} & (IOrganization | IIssue | IUser | IRepository | IPullRequest | IPullRequestCommit | ICommit | IMilestone | IClosedEvent | IMergedEvent | ICrossReferencedEvent | IReviewDismissedEvent | IRelease | IRepositoryTopic | IBot)

type IRepositoryInfo = {
	createdAt: string, 
	description: maybe<string>, 
	descriptionHTML: string, 
	forkCount: number, 
	hasIssuesEnabled: boolean, 
	hasWikiEnabled: boolean, 
	homepageUrl: maybe<string>, 
	isArchived: boolean, 
	isFork: boolean, 
	isLocked: boolean, 
	isMirror: boolean, 
	isPrivate: boolean, 
	licenseInfo: maybe<ILicense>, 
	lockReason: maybe<RepositoryLockReason>, 
	mirrorUrl: maybe<string>, 
	name: string, 
	nameWithOwner: string, 
	owner: IRepositoryOwner, 
	pushedAt: maybe<string>, 
	resourcePath: string, 
	shortDescriptionHTML: string, 
	updatedAt: string, 
	url: string
} & (IRepository)

type IComment = {
	author: maybe<IActor>, 
	authorAssociation: CommentAuthorAssociation, 
	body: string, 
	bodyHTML: string, 
	bodyText: string, 
	createdAt: string, 
	createdViaEmail: boolean, 
	editor: maybe<IActor>, 
	id: string, 
	includesCreatedEdit: boolean, 
	lastEditedAt: maybe<string>, 
	publishedAt: maybe<string>, 
	updatedAt: string, 
	userContentEdits: maybe<IUserContentEditConnection>, 
	viewerDidAuthor: boolean
} & (IIssue | IPullRequest | IIssueComment | ICommitComment | IPullRequestReview | IPullRequestReviewComment | IGistComment)

type IUpdatableComment = {
	viewerCannotUpdateReasons: CommentCannotUpdateReason
} & (IIssue | IPullRequest | IIssueComment | ICommitComment | IPullRequestReview | IPullRequestReviewComment | IGistComment)

type ILabelable = {
	labels: maybe<ILabelConnection>
} & (IIssue | IPullRequest)

type ILockable = {
	activeLockReason: maybe<LockReason>, 
	locked: boolean
} & (IIssue | IPullRequest)

type IReactable = {
	databaseId: maybe<number>, 
	id: string, 
	reactionGroups: maybe<IReactionGroup>, 
	reactions: IReactionConnection, 
	viewerCanReact: boolean
} & (IIssue | IPullRequest | IIssueComment | ICommitComment | IPullRequestReview | IPullRequestReviewComment)

type IRepositoryNode = {
	repository: IRepository
} & (IIssue | IPullRequest | IIssueComment | ICommitComment | IPullRequestReview | IPullRequestReviewComment | ICommitCommentThread)

type IDeletable = {
	viewerCanDelete: boolean
} & (IIssueComment | ICommitComment | IPullRequestReview | IPullRequestReviewComment | IGistComment)

type IGitObject = {
	abbreviatedOid: string, 
	commitResourcePath: string, 
	commitUrl: string, 
	id: string, 
	oid: any, 
	repository: IRepository
} & (ICommit | ITree | IBlob | ITag)

type IGitSignature = {
	email: string, 
	isValid: boolean, 
	payload: string, 
	signature: string, 
	signer: maybe<IUser>, 
	state: GitSignatureState, 
	wasSignedByGitHub: boolean
} & (IGpgSignature | ISmimeSignature | IUnknownSignature)

type IContribution = {
	isRestricted: boolean, 
	occurredAt: string, 
	resourcePath: string, 
	url: string, 
	user: IUser
} & (ICreatedIssueContribution | IRestrictedContribution | ICreatedPullRequestContribution | IJoinedGitHubContribution)
// OBJECT TYPES 
interface IQuery {
	codeOfConduct: maybe<ICodeOfConduct>, 
	codesOfConduct: maybe<ICodeOfConduct>, 
	license: maybe<ILicense>, 
	licenses: ILicense, 
	marketplaceCategories: IMarketplaceCategory, 
	marketplaceCategory: maybe<IMarketplaceCategory>, 
	marketplaceListing: maybe<IMarketplaceListing>, 
	marketplaceListings: IMarketplaceListingConnection, 
	meta: IGitHubMetadata, 
	node: maybe<INode>, 
	nodes: INode, 
	organization: maybe<IOrganization>, 
	rateLimit: maybe<IRateLimit>, 
	relay: IQuery, 
	repository: maybe<IRepository>, 
	repositoryOwner: maybe<IRepositoryOwner>, 
	resource: maybe<IUniformResourceLocatable>, 
	search: ISearchResultItemConnection, 
	securityAdvisories: ISecurityAdvisoryConnection, 
	securityAdvisory: maybe<ISecurityAdvisory>, 
	securityVulnerabilities: ISecurityVulnerabilityConnection, 
	topic: maybe<ITopic>, 
	user: maybe<IUser>, 
	viewer: IUser
}

interface ICodeOfConduct {
	body: maybe<string>, 
	key: string, 
	name: string, 
	url: maybe<string>
}

interface ILicense {
	body: string, 
	conditions: ILicenseRule, 
	description: maybe<string>, 
	featured: boolean, 
	hidden: boolean, 
	id: string, 
	implementation: maybe<string>, 
	key: string, 
	limitations: ILicenseRule, 
	name: string, 
	nickname: maybe<string>, 
	permissions: ILicenseRule, 
	pseudoLicense: boolean, 
	spdxId: maybe<string>, 
	url: maybe<string>
}

interface ILicenseRule {
	description: string, 
	key: string, 
	label: string
}

interface IMarketplaceCategory {
	description: maybe<string>, 
	howItWorks: maybe<string>, 
	id: string, 
	name: string, 
	primaryListingCount: number, 
	resourcePath: string, 
	secondaryListingCount: number, 
	slug: string, 
	url: string
}

interface IMarketplaceListing {
	app: maybe<IApp>, 
	companyUrl: maybe<string>, 
	configurationResourcePath: string, 
	configurationUrl: string, 
	documentationUrl: maybe<string>, 
	extendedDescription: maybe<string>, 
	extendedDescriptionHTML: string, 
	fullDescription: string, 
	fullDescriptionHTML: string, 
	hasApprovalBeenRequested: boolean, 
	hasPublishedFreeTrialPlans: boolean, 
	hasTermsOfService: boolean, 
	howItWorks: maybe<string>, 
	howItWorksHTML: string, 
	id: string, 
	installationUrl: maybe<string>, 
	installedForViewer: boolean, 
	isApproved: boolean, 
	isDelisted: boolean, 
	isDraft: boolean, 
	isPaid: boolean, 
	isRejected: boolean, 
	logoBackgroundColor: string, 
	logoUrl: maybe<string>, 
	name: string, 
	normalizedShortDescription: string, 
	pricingUrl: maybe<string>, 
	primaryCategory: IMarketplaceCategory, 
	privacyPolicyUrl: string, 
	resourcePath: string, 
	screenshotUrls: string, 
	secondaryCategory: maybe<IMarketplaceCategory>, 
	shortDescription: string, 
	slug: string, 
	statusUrl: maybe<string>, 
	supportEmail: maybe<string>, 
	supportUrl: string, 
	termsOfServiceUrl: maybe<string>, 
	url: string, 
	viewerCanAddPlans: boolean, 
	viewerCanApprove: boolean, 
	viewerCanDelist: boolean, 
	viewerCanEdit: boolean, 
	viewerCanEditCategories: boolean, 
	viewerCanEditPlans: boolean, 
	viewerCanRedraft: boolean, 
	viewerCanReject: boolean, 
	viewerCanRequestApproval: boolean, 
	viewerHasPurchased: boolean, 
	viewerHasPurchasedForAllOrganizations: boolean, 
	viewerIsListingAdmin: boolean
}

interface IApp {
	createdAt: string, 
	databaseId: maybe<number>, 
	description: maybe<string>, 
	id: string, 
	logoBackgroundColor: string, 
	logoUrl: string, 
	name: string, 
	slug: string, 
	updatedAt: string, 
	url: string
}

interface IMarketplaceListingConnection {
	edges: maybe<IMarketplaceListingEdge>, 
	nodes: maybe<IMarketplaceListing>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IMarketplaceListingEdge {
	cursor: string, 
	node: maybe<IMarketplaceListing>
}

interface IPageInfo {
	endCursor: maybe<string>, 
	hasNextPage: boolean, 
	hasPreviousPage: boolean, 
	startCursor: maybe<string>
}

interface IGitHubMetadata {
	gitHubServicesSha: any, 
	gitIpAddresses: maybe<string>, 
	hookIpAddresses: maybe<string>, 
	importerIpAddresses: maybe<string>, 
	isPasswordAuthenticationVerifiable: boolean, 
	pagesIpAddresses: maybe<string>
}

interface IOrganization {
	avatarUrl: string, 
	databaseId: maybe<number>, 
	description: maybe<string>, 
	email: maybe<string>, 
	id: string, 
	isVerified: boolean, 
	location: maybe<string>, 
	login: string, 
	members: IUserConnection, 
	membersWithRole: IOrganizationMemberConnection, 
	name: maybe<string>, 
	newTeamResourcePath: string, 
	newTeamUrl: string, 
	organizationBillingEmail: maybe<string>, 
	pendingMembers: IUserConnection, 
	pinnedRepositories: IRepositoryConnection, 
	project: maybe<IProject>, 
	projects: IProjectConnection, 
	projectsResourcePath: string, 
	projectsUrl: string, 
	repositories: IRepositoryConnection, 
	repository: maybe<IRepository>, 
	requiresTwoFactorAuthentication: maybe<boolean>, 
	resourcePath: string, 
	samlIdentityProvider: maybe<IOrganizationIdentityProvider>, 
	team: maybe<ITeam>, 
	teams: ITeamConnection, 
	teamsResourcePath: string, 
	teamsUrl: string, 
	url: string, 
	viewerCanAdminister: boolean, 
	viewerCanCreateProjects: boolean, 
	viewerCanCreateRepositories: boolean, 
	viewerCanCreateTeams: boolean, 
	viewerIsAMember: boolean, 
	websiteUrl: maybe<string>
}

interface IProject {
	body: maybe<string>, 
	bodyHTML: string, 
	closed: boolean, 
	closedAt: maybe<string>, 
	columns: IProjectColumnConnection, 
	createdAt: string, 
	creator: maybe<IActor>, 
	databaseId: maybe<number>, 
	id: string, 
	name: string, 
	number: number, 
	owner: IProjectOwner, 
	pendingCards: IProjectCardConnection, 
	resourcePath: string, 
	state: ProjectState, 
	updatedAt: string, 
	url: string, 
	viewerCanUpdate: boolean
}

interface IProjectColumnConnection {
	edges: maybe<IProjectColumnEdge>, 
	nodes: maybe<IProjectColumn>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IProjectColumnEdge {
	cursor: string, 
	node: maybe<IProjectColumn>
}

interface IProjectColumn {
	cards: IProjectCardConnection, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string, 
	name: string, 
	project: IProject, 
	purpose: maybe<ProjectColumnPurpose>, 
	resourcePath: string, 
	updatedAt: string, 
	url: string
}

interface IProjectCardConnection {
	edges: maybe<IProjectCardEdge>, 
	nodes: maybe<IProjectCard>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IProjectCardEdge {
	cursor: string, 
	node: maybe<IProjectCard>
}

interface IProjectCard {
	column: maybe<IProjectColumn>, 
	content: maybe<ProjectCardItem>, 
	createdAt: string, 
	creator: maybe<IActor>, 
	databaseId: maybe<number>, 
	id: string, 
	isArchived: boolean, 
	note: maybe<string>, 
	project: IProject, 
	resourcePath: string, 
	state: maybe<ProjectCardState>, 
	updatedAt: string, 
	url: string
}

interface IIssue {
	activeLockReason: maybe<LockReason>, 
	assignees: IUserConnection, 
	author: maybe<IActor>, 
	authorAssociation: CommentAuthorAssociation, 
	body: string, 
	bodyHTML: string, 
	bodyText: string, 
	closed: boolean, 
	closedAt: maybe<string>, 
	comments: IIssueCommentConnection, 
	createdAt: string, 
	createdViaEmail: boolean, 
	databaseId: maybe<number>, 
	editor: maybe<IActor>, 
	id: string, 
	includesCreatedEdit: boolean, 
	labels: maybe<ILabelConnection>, 
	lastEditedAt: maybe<string>, 
	locked: boolean, 
	milestone: maybe<IMilestone>, 
	number: number, 
	participants: IUserConnection, 
	projectCards: IProjectCardConnection, 
	publishedAt: maybe<string>, 
	reactionGroups: maybe<IReactionGroup>, 
	reactions: IReactionConnection, 
	repository: IRepository, 
	resourcePath: string, 
	state: IssueState, 
	timeline: IIssueTimelineConnection, 
	title: string, 
	updatedAt: string, 
	url: string, 
	userContentEdits: maybe<IUserContentEditConnection>, 
	viewerCanReact: boolean, 
	viewerCanSubscribe: boolean, 
	viewerCanUpdate: boolean, 
	viewerCannotUpdateReasons: CommentCannotUpdateReason, 
	viewerDidAuthor: boolean, 
	viewerSubscription: maybe<SubscriptionState>
}

interface IUserConnection {
	edges: maybe<IUserEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IUserEdge {
	cursor: string, 
	node: maybe<IUser>
}

interface IUser {
	avatarUrl: string, 
	bio: maybe<string>, 
	bioHTML: string, 
	commitComments: ICommitCommentConnection, 
	company: maybe<string>, 
	companyHTML: string, 
	contributionsCollection: IContributionsCollection, 
	createdAt: string, 
	databaseId: maybe<number>, 
	email: string, 
	followers: IFollowerConnection, 
	following: IFollowingConnection, 
	gist: maybe<IGist>, 
	gistComments: IGistCommentConnection, 
	gists: IGistConnection, 
	id: string, 
	isBountyHunter: boolean, 
	isCampusExpert: boolean, 
	isDeveloperProgramMember: boolean, 
	isEmployee: boolean, 
	isHireable: boolean, 
	isSiteAdmin: boolean, 
	isViewer: boolean, 
	issueComments: IIssueCommentConnection, 
	issues: IIssueConnection, 
	location: maybe<string>, 
	login: string, 
	name: maybe<string>, 
	organization: maybe<IOrganization>, 
	organizations: IOrganizationConnection, 
	pinnedRepositories: IRepositoryConnection, 
	publicKeys: IPublicKeyConnection, 
	pullRequests: IPullRequestConnection, 
	repositories: IRepositoryConnection, 
	repositoriesContributedTo: IRepositoryConnection, 
	repository: maybe<IRepository>, 
	resourcePath: string, 
	starredRepositories: IStarredRepositoryConnection, 
	updatedAt: string, 
	url: string, 
	viewerCanFollow: boolean, 
	viewerIsFollowing: boolean, 
	watching: IRepositoryConnection, 
	websiteUrl: maybe<string>
}

interface IRepositoryConnection {
	edges: maybe<IRepositoryEdge>, 
	nodes: maybe<IRepository>, 
	pageInfo: IPageInfo, 
	totalCount: number, 
	totalDiskUsage: number
}

interface IRepositoryEdge {
	cursor: string, 
	node: maybe<IRepository>
}

interface IRepository {
	assignableUsers: IUserConnection, 
	branchProtectionRules: IBranchProtectionRuleConnection, 
	codeOfConduct: maybe<ICodeOfConduct>, 
	collaborators: maybe<IRepositoryCollaboratorConnection>, 
	commitComments: ICommitCommentConnection, 
	createdAt: string, 
	databaseId: maybe<number>, 
	defaultBranchRef: maybe<IRef>, 
	deployKeys: IDeployKeyConnection, 
	deployments: IDeploymentConnection, 
	description: maybe<string>, 
	descriptionHTML: string, 
	diskUsage: maybe<number>, 
	forkCount: number, 
	forks: IRepositoryConnection, 
	hasIssuesEnabled: boolean, 
	hasWikiEnabled: boolean, 
	homepageUrl: maybe<string>, 
	id: string, 
	isArchived: boolean, 
	isFork: boolean, 
	isLocked: boolean, 
	isMirror: boolean, 
	isPrivate: boolean, 
	issue: maybe<IIssue>, 
	issueOrPullRequest: maybe<IssueOrPullRequest>, 
	issues: IIssueConnection, 
	label: maybe<ILabel>, 
	labels: maybe<ILabelConnection>, 
	languages: maybe<ILanguageConnection>, 
	licenseInfo: maybe<ILicense>, 
	lockReason: maybe<RepositoryLockReason>, 
	mentionableUsers: IUserConnection, 
	mergeCommitAllowed: boolean, 
	milestone: maybe<IMilestone>, 
	milestones: maybe<IMilestoneConnection>, 
	mirrorUrl: maybe<string>, 
	name: string, 
	nameWithOwner: string, 
	object: maybe<IGitObject>, 
	owner: IRepositoryOwner, 
	parent: maybe<IRepository>, 
	primaryLanguage: maybe<ILanguage>, 
	project: maybe<IProject>, 
	projects: IProjectConnection, 
	projectsResourcePath: string, 
	projectsUrl: string, 
	protectedBranches: IProtectedBranchConnection, 
	pullRequest: maybe<IPullRequest>, 
	pullRequests: IPullRequestConnection, 
	pushedAt: maybe<string>, 
	rebaseMergeAllowed: boolean, 
	ref: maybe<IRef>, 
	refs: maybe<IRefConnection>, 
	release: maybe<IRelease>, 
	releases: IReleaseConnection, 
	repositoryTopics: IRepositoryTopicConnection, 
	resourcePath: string, 
	shortDescriptionHTML: string, 
	squashMergeAllowed: boolean, 
	sshUrl: any, 
	stargazers: IStargazerConnection, 
	updatedAt: string, 
	url: string, 
	viewerCanAdminister: boolean, 
	viewerCanCreateProjects: boolean, 
	viewerCanSubscribe: boolean, 
	viewerCanUpdateTopics: boolean, 
	viewerHasStarred: boolean, 
	viewerPermission: maybe<RepositoryPermission>, 
	viewerSubscription: maybe<SubscriptionState>, 
	watchers: IUserConnection
}

interface IStargazerConnection {
	edges: maybe<IStargazerEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IStargazerEdge {
	cursor: string, 
	node: IUser, 
	starredAt: string
}

interface IBranchProtectionRuleConnection {
	edges: maybe<IBranchProtectionRuleEdge>, 
	nodes: maybe<IBranchProtectionRule>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IBranchProtectionRuleEdge {
	cursor: string, 
	node: maybe<IBranchProtectionRule>
}

interface IBranchProtectionRule {
	branchProtectionRuleConflicts: IBranchProtectionRuleConflictConnection, 
	creator: maybe<IActor>, 
	databaseId: maybe<number>, 
	dismissesStaleReviews: boolean, 
	id: string, 
	isAdminEnforced: boolean, 
	matchingRefs: IRefConnection, 
	pattern: string, 
	pushAllowances: IPushAllowanceConnection, 
	repository: maybe<IRepository>, 
	requiredApprovingReviewCount: maybe<number>, 
	requiredStatusCheckContexts: maybe<string>, 
	requiresApprovingReviews: boolean, 
	requiresCommitSignatures: boolean, 
	requiresStatusChecks: boolean, 
	requiresStrictStatusChecks: boolean, 
	restrictsPushes: boolean, 
	restrictsReviewDismissals: boolean, 
	reviewDismissalAllowances: IReviewDismissalAllowanceConnection
}

interface IBranchProtectionRuleConflictConnection {
	edges: maybe<IBranchProtectionRuleConflictEdge>, 
	nodes: maybe<IBranchProtectionRuleConflict>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IBranchProtectionRuleConflictEdge {
	cursor: string, 
	node: maybe<IBranchProtectionRuleConflict>
}

interface IBranchProtectionRuleConflict {
	branchProtectionRule: maybe<IBranchProtectionRule>, 
	conflictingBranchProtectionRule: maybe<IBranchProtectionRule>, 
	ref: maybe<IRef>
}

interface IRef {
	associatedPullRequests: IPullRequestConnection, 
	id: string, 
	name: string, 
	prefix: string, 
	repository: IRepository, 
	target: IGitObject
}

interface IPullRequestConnection {
	edges: maybe<IPullRequestEdge>, 
	nodes: maybe<IPullRequest>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IPullRequestEdge {
	cursor: string, 
	node: maybe<IPullRequest>
}

interface IPullRequest {
	activeLockReason: maybe<LockReason>, 
	additions: number, 
	assignees: IUserConnection, 
	author: maybe<IActor>, 
	authorAssociation: CommentAuthorAssociation, 
	baseRef: maybe<IRef>, 
	baseRefName: string, 
	baseRefOid: any, 
	body: string, 
	bodyHTML: string, 
	bodyText: string, 
	changedFiles: number, 
	closed: boolean, 
	closedAt: maybe<string>, 
	comments: IIssueCommentConnection, 
	commits: IPullRequestCommitConnection, 
	createdAt: string, 
	createdViaEmail: boolean, 
	databaseId: maybe<number>, 
	deletions: number, 
	editor: maybe<IActor>, 
	headRef: maybe<IRef>, 
	headRefName: string, 
	headRefOid: any, 
	headRepository: maybe<IRepository>, 
	headRepositoryOwner: maybe<IRepositoryOwner>, 
	id: string, 
	includesCreatedEdit: boolean, 
	isCrossRepository: boolean, 
	labels: maybe<ILabelConnection>, 
	lastEditedAt: maybe<string>, 
	locked: boolean, 
	maintainerCanModify: boolean, 
	mergeCommit: maybe<ICommit>, 
	mergeable: MergeableState, 
	merged: boolean, 
	mergedAt: maybe<string>, 
	mergedBy: maybe<IActor>, 
	milestone: maybe<IMilestone>, 
	number: number, 
	participants: IUserConnection, 
	permalink: string, 
	potentialMergeCommit: maybe<ICommit>, 
	projectCards: IProjectCardConnection, 
	publishedAt: maybe<string>, 
	reactionGroups: maybe<IReactionGroup>, 
	reactions: IReactionConnection, 
	repository: IRepository, 
	resourcePath: string, 
	revertResourcePath: string, 
	revertUrl: string, 
	reviewRequests: maybe<IReviewRequestConnection>, 
	reviews: maybe<IPullRequestReviewConnection>, 
	state: PullRequestState, 
	suggestedReviewers: ISuggestedReviewer, 
	timeline: IPullRequestTimelineConnection, 
	title: string, 
	updatedAt: string, 
	url: string, 
	userContentEdits: maybe<IUserContentEditConnection>, 
	viewerCanApplySuggestion: boolean, 
	viewerCanReact: boolean, 
	viewerCanSubscribe: boolean, 
	viewerCanUpdate: boolean, 
	viewerCannotUpdateReasons: CommentCannotUpdateReason, 
	viewerDidAuthor: boolean, 
	viewerSubscription: maybe<SubscriptionState>
}

interface IUserContentEditConnection {
	edges: maybe<IUserContentEditEdge>, 
	nodes: maybe<IUserContentEdit>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IUserContentEditEdge {
	cursor: string, 
	node: maybe<IUserContentEdit>
}

interface IUserContentEdit {
	createdAt: string, 
	deletedAt: maybe<string>, 
	deletedBy: maybe<IActor>, 
	diff: maybe<string>, 
	editedAt: string, 
	editor: maybe<IActor>, 
	id: string, 
	updatedAt: string
}

interface ILabelConnection {
	edges: maybe<ILabelEdge>, 
	nodes: maybe<ILabel>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ILabelEdge {
	cursor: string, 
	node: maybe<ILabel>
}

interface ILabel {
	color: string, 
	createdAt: maybe<string>, 
	description: maybe<string>, 
	id: string, 
	isDefault: boolean, 
	issues: IIssueConnection, 
	name: string, 
	pullRequests: IPullRequestConnection, 
	repository: IRepository, 
	resourcePath: string, 
	updatedAt: maybe<string>, 
	url: string
}

interface IIssueConnection {
	edges: maybe<IIssueEdge>, 
	nodes: maybe<IIssue>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IIssueEdge {
	cursor: string, 
	node: maybe<IIssue>
}

interface IReactionGroup {
	content: ReactionContent, 
	createdAt: maybe<string>, 
	subject: IReactable, 
	users: IReactingUserConnection, 
	viewerHasReacted: boolean
}

interface IReactingUserConnection {
	edges: maybe<IReactingUserEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IReactingUserEdge {
	cursor: string, 
	node: IUser, 
	reactedAt: string
}

interface IReactionConnection {
	edges: maybe<IReactionEdge>, 
	nodes: maybe<IReaction>, 
	pageInfo: IPageInfo, 
	totalCount: number, 
	viewerHasReacted: boolean
}

interface IReactionEdge {
	cursor: string, 
	node: maybe<IReaction>
}

interface IReaction {
	content: ReactionContent, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string, 
	reactable: IReactable, 
	user: maybe<IUser>
}

interface IIssueCommentConnection {
	edges: maybe<IIssueCommentEdge>, 
	nodes: maybe<IIssueComment>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IIssueCommentEdge {
	cursor: string, 
	node: maybe<IIssueComment>
}

interface IIssueComment {
	author: maybe<IActor>, 
	authorAssociation: CommentAuthorAssociation, 
	body: string, 
	bodyHTML: string, 
	bodyText: string, 
	createdAt: string, 
	createdViaEmail: boolean, 
	databaseId: maybe<number>, 
	editor: maybe<IActor>, 
	id: string, 
	includesCreatedEdit: boolean, 
	isMinimized: boolean, 
	issue: IIssue, 
	lastEditedAt: maybe<string>, 
	minimizedReason: maybe<string>, 
	publishedAt: maybe<string>, 
	pullRequest: maybe<IPullRequest>, 
	reactionGroups: maybe<IReactionGroup>, 
	reactions: IReactionConnection, 
	repository: IRepository, 
	resourcePath: string, 
	updatedAt: string, 
	url: string, 
	userContentEdits: maybe<IUserContentEditConnection>, 
	viewerCanDelete: boolean, 
	viewerCanMinimize: boolean, 
	viewerCanReact: boolean, 
	viewerCanUpdate: boolean, 
	viewerCannotUpdateReasons: CommentCannotUpdateReason, 
	viewerDidAuthor: boolean
}

interface IPullRequestCommitConnection {
	edges: maybe<IPullRequestCommitEdge>, 
	nodes: maybe<IPullRequestCommit>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IPullRequestCommitEdge {
	cursor: string, 
	node: maybe<IPullRequestCommit>
}

interface IPullRequestCommit {
	commit: ICommit, 
	id: string, 
	pullRequest: IPullRequest, 
	resourcePath: string, 
	url: string
}

interface ICommit {
	abbreviatedOid: string, 
	additions: number, 
	author: maybe<IGitActor>, 
	authoredByCommitter: boolean, 
	authoredDate: string, 
	blame: IBlame, 
	changedFiles: number, 
	comments: ICommitCommentConnection, 
	commitResourcePath: string, 
	commitUrl: string, 
	committedDate: string, 
	committedViaWeb: boolean, 
	committer: maybe<IGitActor>, 
	deletions: number, 
	history: ICommitHistoryConnection, 
	id: string, 
	message: string, 
	messageBody: string, 
	messageBodyHTML: string, 
	messageHeadline: string, 
	messageHeadlineHTML: string, 
	oid: any, 
	parents: ICommitConnection, 
	pushedDate: maybe<string>, 
	repository: IRepository, 
	resourcePath: string, 
	signature: maybe<IGitSignature>, 
	status: maybe<IStatus>, 
	tarballUrl: string, 
	tree: ITree, 
	treeResourcePath: string, 
	treeUrl: string, 
	url: string, 
	viewerCanSubscribe: boolean, 
	viewerSubscription: maybe<SubscriptionState>, 
	zipballUrl: string
}

interface IGitActor {
	avatarUrl: string, 
	date: maybe<any>, 
	email: maybe<string>, 
	name: maybe<string>, 
	user: maybe<IUser>
}

interface IBlame {
	ranges: IBlameRange
}

interface IBlameRange {
	age: number, 
	commit: ICommit, 
	endingLine: number, 
	startingLine: number
}

interface ICommitCommentConnection {
	edges: maybe<ICommitCommentEdge>, 
	nodes: maybe<ICommitComment>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ICommitCommentEdge {
	cursor: string, 
	node: maybe<ICommitComment>
}

interface ICommitComment {
	author: maybe<IActor>, 
	authorAssociation: CommentAuthorAssociation, 
	body: string, 
	bodyHTML: string, 
	bodyText: string, 
	commit: maybe<ICommit>, 
	createdAt: string, 
	createdViaEmail: boolean, 
	databaseId: maybe<number>, 
	editor: maybe<IActor>, 
	id: string, 
	includesCreatedEdit: boolean, 
	isMinimized: boolean, 
	lastEditedAt: maybe<string>, 
	minimizedReason: maybe<string>, 
	path: maybe<string>, 
	position: maybe<number>, 
	publishedAt: maybe<string>, 
	reactionGroups: maybe<IReactionGroup>, 
	reactions: IReactionConnection, 
	repository: IRepository, 
	resourcePath: string, 
	updatedAt: string, 
	url: string, 
	userContentEdits: maybe<IUserContentEditConnection>, 
	viewerCanDelete: boolean, 
	viewerCanMinimize: boolean, 
	viewerCanReact: boolean, 
	viewerCanUpdate: boolean, 
	viewerCannotUpdateReasons: CommentCannotUpdateReason, 
	viewerDidAuthor: boolean
}

interface ICommitHistoryConnection {
	edges: maybe<ICommitEdge>, 
	nodes: maybe<ICommit>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ICommitEdge {
	cursor: string, 
	node: maybe<ICommit>
}

interface ICommitConnection {
	edges: maybe<ICommitEdge>, 
	nodes: maybe<ICommit>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IStatus {
	commit: maybe<ICommit>, 
	context: maybe<IStatusContext>, 
	contexts: IStatusContext, 
	id: string, 
	state: StatusState
}

interface IStatusContext {
	commit: maybe<ICommit>, 
	context: string, 
	createdAt: string, 
	creator: maybe<IActor>, 
	description: maybe<string>, 
	id: string, 
	state: StatusState, 
	targetUrl: maybe<string>
}

interface ITree {
	abbreviatedOid: string, 
	commitResourcePath: string, 
	commitUrl: string, 
	entries: maybe<ITreeEntry>, 
	id: string, 
	oid: any, 
	repository: IRepository
}

interface ITreeEntry {
	mode: number, 
	name: string, 
	object: maybe<IGitObject>, 
	oid: any, 
	repository: IRepository, 
	type: string
}

interface IMilestone {
	closed: boolean, 
	closedAt: maybe<string>, 
	createdAt: string, 
	creator: maybe<IActor>, 
	description: maybe<string>, 
	dueOn: maybe<string>, 
	id: string, 
	issues: IIssueConnection, 
	number: number, 
	pullRequests: IPullRequestConnection, 
	repository: IRepository, 
	resourcePath: string, 
	state: MilestoneState, 
	title: string, 
	updatedAt: string, 
	url: string
}

interface IReviewRequestConnection {
	edges: maybe<IReviewRequestEdge>, 
	nodes: maybe<IReviewRequest>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IReviewRequestEdge {
	cursor: string, 
	node: maybe<IReviewRequest>
}

interface IReviewRequest {
	databaseId: maybe<number>, 
	id: string, 
	pullRequest: IPullRequest, 
	requestedReviewer: maybe<RequestedReviewer>
}

interface ITeam {
	ancestors: ITeamConnection, 
	avatarUrl: maybe<string>, 
	childTeams: ITeamConnection, 
	combinedSlug: string, 
	createdAt: string, 
	description: maybe<string>, 
	editTeamResourcePath: string, 
	editTeamUrl: string, 
	id: string, 
	invitations: maybe<IOrganizationInvitationConnection>, 
	members: ITeamMemberConnection, 
	membersResourcePath: string, 
	membersUrl: string, 
	name: string, 
	newTeamResourcePath: string, 
	newTeamUrl: string, 
	organization: IOrganization, 
	parentTeam: maybe<ITeam>, 
	privacy: TeamPrivacy, 
	repositories: ITeamRepositoryConnection, 
	repositoriesResourcePath: string, 
	repositoriesUrl: string, 
	resourcePath: string, 
	slug: string, 
	teamsResourcePath: string, 
	teamsUrl: string, 
	updatedAt: string, 
	url: string, 
	viewerCanAdminister: boolean, 
	viewerCanSubscribe: boolean, 
	viewerSubscription: maybe<SubscriptionState>
}

interface ITeamConnection {
	edges: maybe<ITeamEdge>, 
	nodes: maybe<ITeam>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ITeamEdge {
	cursor: string, 
	node: maybe<ITeam>
}

interface IOrganizationInvitationConnection {
	edges: maybe<IOrganizationInvitationEdge>, 
	nodes: maybe<IOrganizationInvitation>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IOrganizationInvitationEdge {
	cursor: string, 
	node: maybe<IOrganizationInvitation>
}

interface IOrganizationInvitation {
	createdAt: string, 
	email: maybe<string>, 
	id: string, 
	invitationType: OrganizationInvitationType, 
	invitee: maybe<IUser>, 
	inviter: IUser, 
	organization: IOrganization, 
	role: OrganizationInvitationRole
}

interface ITeamMemberConnection {
	edges: maybe<ITeamMemberEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ITeamMemberEdge {
	cursor: string, 
	memberAccessResourcePath: string, 
	memberAccessUrl: string, 
	node: IUser, 
	role: TeamMemberRole
}

interface ITeamRepositoryConnection {
	edges: maybe<ITeamRepositoryEdge>, 
	nodes: maybe<IRepository>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ITeamRepositoryEdge {
	cursor: string, 
	node: IRepository, 
	permission: RepositoryPermission
}

interface IPullRequestReviewConnection {
	edges: maybe<IPullRequestReviewEdge>, 
	nodes: maybe<IPullRequestReview>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IPullRequestReviewEdge {
	cursor: string, 
	node: maybe<IPullRequestReview>
}

interface IPullRequestReview {
	author: maybe<IActor>, 
	authorAssociation: CommentAuthorAssociation, 
	body: string, 
	bodyHTML: string, 
	bodyText: string, 
	comments: IPullRequestReviewCommentConnection, 
	commit: maybe<ICommit>, 
	createdAt: string, 
	createdViaEmail: boolean, 
	databaseId: maybe<number>, 
	editor: maybe<IActor>, 
	id: string, 
	includesCreatedEdit: boolean, 
	lastEditedAt: maybe<string>, 
	onBehalfOf: ITeamConnection, 
	publishedAt: maybe<string>, 
	pullRequest: IPullRequest, 
	reactionGroups: maybe<IReactionGroup>, 
	reactions: IReactionConnection, 
	repository: IRepository, 
	resourcePath: string, 
	state: PullRequestReviewState, 
	submittedAt: maybe<string>, 
	updatedAt: string, 
	url: string, 
	userContentEdits: maybe<IUserContentEditConnection>, 
	viewerCanDelete: boolean, 
	viewerCanReact: boolean, 
	viewerCanUpdate: boolean, 
	viewerCannotUpdateReasons: CommentCannotUpdateReason, 
	viewerDidAuthor: boolean
}

interface IPullRequestReviewCommentConnection {
	edges: maybe<IPullRequestReviewCommentEdge>, 
	nodes: maybe<IPullRequestReviewComment>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IPullRequestReviewCommentEdge {
	cursor: string, 
	node: maybe<IPullRequestReviewComment>
}

interface IPullRequestReviewComment {
	author: maybe<IActor>, 
	authorAssociation: CommentAuthorAssociation, 
	body: string, 
	bodyHTML: string, 
	bodyText: string, 
	commit: ICommit, 
	createdAt: string, 
	createdViaEmail: boolean, 
	databaseId: maybe<number>, 
	diffHunk: string, 
	draftedAt: string, 
	editor: maybe<IActor>, 
	id: string, 
	includesCreatedEdit: boolean, 
	isMinimized: boolean, 
	lastEditedAt: maybe<string>, 
	minimizedReason: maybe<string>, 
	originalCommit: maybe<ICommit>, 
	originalPosition: number, 
	outdated: boolean, 
	path: string, 
	position: maybe<number>, 
	publishedAt: maybe<string>, 
	pullRequest: IPullRequest, 
	pullRequestReview: maybe<IPullRequestReview>, 
	reactionGroups: maybe<IReactionGroup>, 
	reactions: IReactionConnection, 
	replyTo: maybe<IPullRequestReviewComment>, 
	repository: IRepository, 
	resourcePath: string, 
	state: PullRequestReviewCommentState, 
	updatedAt: string, 
	url: string, 
	userContentEdits: maybe<IUserContentEditConnection>, 
	viewerCanDelete: boolean, 
	viewerCanMinimize: boolean, 
	viewerCanReact: boolean, 
	viewerCanUpdate: boolean, 
	viewerCannotUpdateReasons: CommentCannotUpdateReason, 
	viewerDidAuthor: boolean
}

interface ISuggestedReviewer {
	isAuthor: boolean, 
	isCommenter: boolean, 
	reviewer: IUser
}

interface IPullRequestTimelineConnection {
	edges: maybe<IPullRequestTimelineItemEdge>, 
	nodes: maybe<PullRequestTimelineItem>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IPullRequestTimelineItemEdge {
	cursor: string, 
	node: maybe<PullRequestTimelineItem>
}

interface ICommitCommentThread {
	comments: ICommitCommentConnection, 
	commit: ICommit, 
	id: string, 
	path: maybe<string>, 
	position: maybe<number>, 
	repository: IRepository
}

interface IPullRequestReviewThread {
	comments: IPullRequestReviewCommentConnection, 
	id: string, 
	pullRequest: IPullRequest, 
	repository: IRepository
}

interface IClosedEvent {
	actor: maybe<IActor>, 
	closable: IClosable, 
	closer: maybe<Closer>, 
	createdAt: string, 
	id: string, 
	resourcePath: string, 
	url: string
}

interface IReopenedEvent {
	actor: maybe<IActor>, 
	closable: IClosable, 
	createdAt: string, 
	id: string
}

interface ISubscribedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	subscribable: ISubscribable
}

interface IUnsubscribedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	subscribable: ISubscribable
}

interface IMergedEvent {
	actor: maybe<IActor>, 
	commit: maybe<ICommit>, 
	createdAt: string, 
	id: string, 
	mergeRef: maybe<IRef>, 
	mergeRefName: string, 
	pullRequest: IPullRequest, 
	resourcePath: string, 
	url: string
}

interface IReferencedEvent {
	actor: maybe<IActor>, 
	commit: maybe<ICommit>, 
	commitRepository: IRepository, 
	createdAt: string, 
	id: string, 
	isCrossRepository: boolean, 
	isDirectReference: boolean, 
	subject: ReferencedSubject
}

interface ICrossReferencedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	isCrossRepository: boolean, 
	referencedAt: string, 
	resourcePath: string, 
	source: ReferencedSubject, 
	target: ReferencedSubject, 
	url: string, 
	willCloseTarget: boolean
}

interface IAssignedEvent {
	actor: maybe<IActor>, 
	assignable: IAssignable, 
	createdAt: string, 
	id: string, 
	user: maybe<IUser>
}

interface IUnassignedEvent {
	actor: maybe<IActor>, 
	assignable: IAssignable, 
	createdAt: string, 
	id: string, 
	user: maybe<IUser>
}

interface ILabeledEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	label: ILabel, 
	labelable: ILabelable
}

interface IUnlabeledEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	label: ILabel, 
	labelable: ILabelable
}

interface IMilestonedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	milestoneTitle: string, 
	subject: MilestoneItem
}

interface IDemilestonedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	milestoneTitle: string, 
	subject: MilestoneItem
}

interface IRenamedTitleEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	currentTitle: string, 
	id: string, 
	previousTitle: string, 
	subject: RenamedTitleSubject
}

interface ILockedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	lockReason: maybe<LockReason>, 
	lockable: ILockable
}

interface IUnlockedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	lockable: ILockable
}

interface IDeployedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	databaseId: maybe<number>, 
	deployment: IDeployment, 
	id: string, 
	pullRequest: IPullRequest, 
	ref: maybe<IRef>
}

interface IDeployment {
	commit: maybe<ICommit>, 
	commitOid: string, 
	createdAt: string, 
	creator: maybe<IActor>, 
	databaseId: maybe<number>, 
	description: maybe<string>, 
	environment: maybe<string>, 
	id: string, 
	latestStatus: maybe<IDeploymentStatus>, 
	payload: maybe<string>, 
	ref: maybe<IRef>, 
	repository: IRepository, 
	state: maybe<DeploymentState>, 
	statuses: maybe<IDeploymentStatusConnection>, 
	task: maybe<string>, 
	updatedAt: string
}

interface IDeploymentStatus {
	createdAt: string, 
	creator: maybe<IActor>, 
	deployment: IDeployment, 
	description: maybe<string>, 
	environmentUrl: maybe<string>, 
	id: string, 
	logUrl: maybe<string>, 
	state: DeploymentStatusState, 
	updatedAt: string
}

interface IDeploymentStatusConnection {
	edges: maybe<IDeploymentStatusEdge>, 
	nodes: maybe<IDeploymentStatus>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IDeploymentStatusEdge {
	cursor: string, 
	node: maybe<IDeploymentStatus>
}

interface IDeploymentEnvironmentChangedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	deploymentStatus: IDeploymentStatus, 
	id: string, 
	pullRequest: IPullRequest
}

interface IHeadRefDeletedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	headRef: maybe<IRef>, 
	headRefName: string, 
	id: string, 
	pullRequest: IPullRequest
}

interface IHeadRefRestoredEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	pullRequest: IPullRequest
}

interface IHeadRefForcePushedEvent {
	actor: maybe<IActor>, 
	afterCommit: maybe<ICommit>, 
	beforeCommit: maybe<ICommit>, 
	createdAt: string, 
	id: string, 
	pullRequest: IPullRequest, 
	ref: maybe<IRef>
}

interface IBaseRefForcePushedEvent {
	actor: maybe<IActor>, 
	afterCommit: maybe<ICommit>, 
	beforeCommit: maybe<ICommit>, 
	createdAt: string, 
	id: string, 
	pullRequest: IPullRequest, 
	ref: maybe<IRef>
}

interface IReviewRequestedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	pullRequest: IPullRequest, 
	requestedReviewer: maybe<RequestedReviewer>
}

interface IReviewRequestRemovedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	pullRequest: IPullRequest, 
	requestedReviewer: maybe<RequestedReviewer>
}

interface IReviewDismissedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string, 
	message: string, 
	messageHtml: string, 
	previousReviewState: PullRequestReviewState, 
	pullRequest: IPullRequest, 
	pullRequestCommit: maybe<IPullRequestCommit>, 
	resourcePath: string, 
	review: maybe<IPullRequestReview>, 
	url: string
}

interface IRefConnection {
	edges: maybe<IRefEdge>, 
	nodes: maybe<IRef>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IRefEdge {
	cursor: string, 
	node: maybe<IRef>
}

interface IPushAllowanceConnection {
	edges: maybe<IPushAllowanceEdge>, 
	nodes: maybe<IPushAllowance>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IPushAllowanceEdge {
	cursor: string, 
	node: maybe<IPushAllowance>
}

interface IPushAllowance {
	actor: maybe<PushAllowanceActor>, 
	branchProtectionRule: maybe<IBranchProtectionRule>, 
	id: string
}

interface IReviewDismissalAllowanceConnection {
	edges: maybe<IReviewDismissalAllowanceEdge>, 
	nodes: maybe<IReviewDismissalAllowance>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IReviewDismissalAllowanceEdge {
	cursor: string, 
	node: maybe<IReviewDismissalAllowance>
}

interface IReviewDismissalAllowance {
	actor: maybe<ReviewDismissalAllowanceActor>, 
	branchProtectionRule: maybe<IBranchProtectionRule>, 
	id: string
}

interface IRepositoryCollaboratorConnection {
	edges: maybe<IRepositoryCollaboratorEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IRepositoryCollaboratorEdge {
	cursor: string, 
	node: IUser, 
	permission: RepositoryPermission
}

interface IDeployKeyConnection {
	edges: maybe<IDeployKeyEdge>, 
	nodes: maybe<IDeployKey>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IDeployKeyEdge {
	cursor: string, 
	node: maybe<IDeployKey>
}

interface IDeployKey {
	createdAt: string, 
	id: string, 
	key: string, 
	readOnly: boolean, 
	title: string, 
	verified: boolean
}

interface IDeploymentConnection {
	edges: maybe<IDeploymentEdge>, 
	nodes: maybe<IDeployment>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IDeploymentEdge {
	cursor: string, 
	node: maybe<IDeployment>
}

interface ILanguageConnection {
	edges: maybe<ILanguageEdge>, 
	nodes: maybe<ILanguage>, 
	pageInfo: IPageInfo, 
	totalCount: number, 
	totalSize: number
}

interface ILanguageEdge {
	cursor: string, 
	node: ILanguage, 
	size: number
}

interface ILanguage {
	color: maybe<string>, 
	id: string, 
	name: string
}

interface IMilestoneConnection {
	edges: maybe<IMilestoneEdge>, 
	nodes: maybe<IMilestone>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IMilestoneEdge {
	cursor: string, 
	node: maybe<IMilestone>
}

interface IProjectConnection {
	edges: maybe<IProjectEdge>, 
	nodes: maybe<IProject>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IProjectEdge {
	cursor: string, 
	node: maybe<IProject>
}

interface IProtectedBranchConnection {
	edges: maybe<IProtectedBranchEdge>, 
	nodes: maybe<IProtectedBranch>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IProtectedBranchEdge {
	cursor: string, 
	node: maybe<IProtectedBranch>
}

interface IProtectedBranch {
	creator: maybe<IActor>, 
	hasDismissableStaleReviews: boolean, 
	hasRequiredReviews: boolean, 
	hasRequiredStatusChecks: boolean, 
	hasRestrictedPushes: boolean, 
	hasRestrictedReviewDismissals: boolean, 
	hasStrictRequiredStatusChecks: boolean, 
	id: string, 
	isAdminEnforced: boolean, 
	name: string, 
	pushAllowances: IPushAllowanceConnection, 
	repository: IRepository, 
	requiredStatusCheckContexts: maybe<string>, 
	reviewDismissalAllowances: IReviewDismissalAllowanceConnection
}

interface IRelease {
	author: maybe<IUser>, 
	createdAt: string, 
	description: maybe<string>, 
	id: string, 
	isDraft: boolean, 
	isPrerelease: boolean, 
	name: maybe<string>, 
	publishedAt: maybe<string>, 
	releaseAssets: IReleaseAssetConnection, 
	resourcePath: string, 
	tag: maybe<IRef>, 
	tagName: string, 
	updatedAt: string, 
	url: string
}

interface IReleaseAssetConnection {
	edges: maybe<IReleaseAssetEdge>, 
	nodes: maybe<IReleaseAsset>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IReleaseAssetEdge {
	cursor: string, 
	node: maybe<IReleaseAsset>
}

interface IReleaseAsset {
	contentType: string, 
	createdAt: string, 
	downloadCount: number, 
	downloadUrl: string, 
	id: string, 
	name: string, 
	release: maybe<IRelease>, 
	size: number, 
	updatedAt: string, 
	uploadedBy: IUser, 
	url: string
}

interface IReleaseConnection {
	edges: maybe<IReleaseEdge>, 
	nodes: maybe<IRelease>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IReleaseEdge {
	cursor: string, 
	node: maybe<IRelease>
}

interface IRepositoryTopicConnection {
	edges: maybe<IRepositoryTopicEdge>, 
	nodes: maybe<IRepositoryTopic>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IRepositoryTopicEdge {
	cursor: string, 
	node: maybe<IRepositoryTopic>
}

interface IRepositoryTopic {
	id: string, 
	resourcePath: string, 
	topic: ITopic, 
	url: string
}

interface ITopic {
	id: string, 
	name: string, 
	relatedTopics: ITopic, 
	stargazers: IStargazerConnection, 
	viewerHasStarred: boolean
}

interface IContributionsCollection {
	contributionCalendar: IContributionCalendar, 
	doesEndInCurrentMonth: boolean, 
	earliestRestrictedContributionDate: maybe<any>, 
	endedAt: string, 
	firstIssueContribution: maybe<CreatedIssueOrRestrictedContribution>, 
	firstPullRequestContribution: maybe<CreatedPullRequestOrRestrictedContribution>, 
	hasActivityInThePast: boolean, 
	hasAnyContributions: boolean, 
	hasAnyRestrictedContributions: boolean, 
	isSingleDay: boolean, 
	issueContributions: ICreatedIssueContributionConnection, 
	joinedGitHubContribution: maybe<IJoinedGitHubContribution>, 
	latestRestrictedContributionDate: maybe<any>, 
	mostRecentCollectionWithActivity: maybe<IContributionsCollection>, 
	mostRecentCollectionWithoutActivity: maybe<IContributionsCollection>, 
	popularIssueContribution: maybe<ICreatedIssueContribution>, 
	popularPullRequestContribution: maybe<ICreatedPullRequestContribution>, 
	restrictedContributionsCount: number, 
	startedAt: string, 
	totalCommitContributions: number, 
	totalIssueContributions: number, 
	totalPullRequestContributions: number, 
	totalPullRequestReviewContributions: number, 
	totalRepositoriesWithContributedCommits: number, 
	totalRepositoriesWithContributedIssues: number, 
	totalRepositoriesWithContributedPullRequestReviews: number, 
	totalRepositoriesWithContributedPullRequests: number, 
	totalRepositoryContributions: number, 
	user: IUser
}

interface IContributionCalendar {
	colors: string, 
	isHalloween: boolean, 
	months: IContributionCalendarMonth, 
	totalContributions: number, 
	weeks: IContributionCalendarWeek
}

interface IContributionCalendarMonth {
	firstDay: any, 
	name: string, 
	totalWeeks: number, 
	year: number
}

interface IContributionCalendarWeek {
	contributionDays: IContributionCalendarDay, 
	firstDay: any
}

interface IContributionCalendarDay {
	color: string, 
	contributionCount: number, 
	date: any, 
	weekday: number
}

interface ICreatedIssueContribution {
	isRestricted: boolean, 
	issue: IIssue, 
	occurredAt: string, 
	resourcePath: string, 
	url: string, 
	user: IUser
}

interface IRestrictedContribution {
	isRestricted: boolean, 
	occurredAt: string, 
	resourcePath: string, 
	url: string, 
	user: IUser
}

interface ICreatedPullRequestContribution {
	isRestricted: boolean, 
	occurredAt: string, 
	pullRequest: IPullRequest, 
	resourcePath: string, 
	url: string, 
	user: IUser
}

interface ICreatedIssueContributionConnection {
	edges: maybe<ICreatedIssueContributionEdge>, 
	nodes: maybe<ICreatedIssueContribution>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ICreatedIssueContributionEdge {
	cursor: string, 
	node: maybe<ICreatedIssueContribution>
}

interface IJoinedGitHubContribution {
	isRestricted: boolean, 
	occurredAt: string, 
	resourcePath: string, 
	url: string, 
	user: IUser
}

interface IFollowerConnection {
	edges: maybe<IUserEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IFollowingConnection {
	edges: maybe<IUserEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IGist {
	comments: IGistCommentConnection, 
	createdAt: string, 
	description: maybe<string>, 
	id: string, 
	isPublic: boolean, 
	name: string, 
	owner: maybe<IRepositoryOwner>, 
	pushedAt: maybe<string>, 
	stargazers: IStargazerConnection, 
	updatedAt: string, 
	viewerHasStarred: boolean
}

interface IGistCommentConnection {
	edges: maybe<IGistCommentEdge>, 
	nodes: maybe<IGistComment>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IGistCommentEdge {
	cursor: string, 
	node: maybe<IGistComment>
}

interface IGistComment {
	author: maybe<IActor>, 
	authorAssociation: CommentAuthorAssociation, 
	body: string, 
	bodyHTML: string, 
	bodyText: string, 
	createdAt: string, 
	createdViaEmail: boolean, 
	databaseId: maybe<number>, 
	editor: maybe<IActor>, 
	gist: IGist, 
	id: string, 
	includesCreatedEdit: boolean, 
	isMinimized: boolean, 
	lastEditedAt: maybe<string>, 
	minimizedReason: maybe<string>, 
	publishedAt: maybe<string>, 
	updatedAt: string, 
	userContentEdits: maybe<IUserContentEditConnection>, 
	viewerCanDelete: boolean, 
	viewerCanMinimize: boolean, 
	viewerCanUpdate: boolean, 
	viewerCannotUpdateReasons: CommentCannotUpdateReason, 
	viewerDidAuthor: boolean
}

interface IGistConnection {
	edges: maybe<IGistEdge>, 
	nodes: maybe<IGist>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IGistEdge {
	cursor: string, 
	node: maybe<IGist>
}

interface IOrganizationConnection {
	edges: maybe<IOrganizationEdge>, 
	nodes: maybe<IOrganization>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IOrganizationEdge {
	cursor: string, 
	node: maybe<IOrganization>
}

interface IPublicKeyConnection {
	edges: maybe<IPublicKeyEdge>, 
	nodes: maybe<IPublicKey>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IPublicKeyEdge {
	cursor: string, 
	node: maybe<IPublicKey>
}

interface IPublicKey {
	id: string, 
	key: string
}

interface IStarredRepositoryConnection {
	edges: maybe<IStarredRepositoryEdge>, 
	nodes: maybe<IRepository>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IStarredRepositoryEdge {
	cursor: string, 
	node: IRepository, 
	starredAt: string
}

interface IIssueTimelineConnection {
	edges: maybe<IIssueTimelineItemEdge>, 
	nodes: maybe<IssueTimelineItem>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IIssueTimelineItemEdge {
	cursor: string, 
	node: maybe<IssueTimelineItem>
}

interface ITransferredEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	fromRepository: maybe<IRepository>, 
	id: string, 
	issue: IIssue
}

interface IOrganizationMemberConnection {
	edges: maybe<IOrganizationMemberEdge>, 
	nodes: maybe<IUser>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IOrganizationMemberEdge {
	cursor: string, 
	node: maybe<IUser>, 
	role: maybe<OrganizationMemberRole>
}

interface IOrganizationIdentityProvider {
	digestMethod: maybe<string>, 
	externalIdentities: IExternalIdentityConnection, 
	id: string, 
	idpCertificate: maybe<any>, 
	issuer: maybe<string>, 
	organization: maybe<IOrganization>, 
	signatureMethod: maybe<string>, 
	ssoUrl: maybe<string>
}

interface IExternalIdentityConnection {
	edges: maybe<IExternalIdentityEdge>, 
	nodes: maybe<IExternalIdentity>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface IExternalIdentityEdge {
	cursor: string, 
	node: maybe<IExternalIdentity>
}

interface IExternalIdentity {
	guid: string, 
	id: string, 
	organizationInvitation: maybe<IOrganizationInvitation>, 
	samlIdentity: maybe<IExternalIdentitySamlAttributes>, 
	scimIdentity: maybe<IExternalIdentityScimAttributes>, 
	user: maybe<IUser>
}

interface IExternalIdentitySamlAttributes {
	nameId: maybe<string>
}

interface IExternalIdentityScimAttributes {
	username: maybe<string>
}

interface IRateLimit {
	cost: number, 
	limit: number, 
	nodeCount: number, 
	remaining: number, 
	resetAt: string
}

interface ISearchResultItemConnection {
	codeCount: number, 
	edges: maybe<ISearchResultItemEdge>, 
	issueCount: number, 
	nodes: maybe<SearchResultItem>, 
	pageInfo: IPageInfo, 
	repositoryCount: number, 
	userCount: number, 
	wikiCount: number
}

interface ISearchResultItemEdge {
	cursor: string, 
	node: maybe<SearchResultItem>, 
	textMatches: maybe<ITextMatch>
}

interface ITextMatch {
	fragment: string, 
	highlights: ITextMatchHighlight, 
	property: string
}

interface ITextMatchHighlight {
	beginIndice: number, 
	endIndice: number, 
	text: string
}

interface ISecurityAdvisoryConnection {
	edges: maybe<ISecurityAdvisoryEdge>, 
	nodes: maybe<ISecurityAdvisory>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ISecurityAdvisoryEdge {
	cursor: string, 
	node: maybe<ISecurityAdvisory>
}

interface ISecurityAdvisory {
	databaseId: maybe<number>, 
	description: string, 
	ghsaId: string, 
	id: string, 
	identifiers: ISecurityAdvisoryIdentifier, 
	publishedAt: string, 
	references: ISecurityAdvisoryReference, 
	severity: SecurityAdvisorySeverity, 
	summary: string, 
	updatedAt: string, 
	vulnerabilities: ISecurityVulnerabilityConnection, 
	withdrawnAt: maybe<string>
}

interface ISecurityAdvisoryIdentifier {
	type: string, 
	value: string
}

interface ISecurityAdvisoryReference {
	url: string
}

interface ISecurityVulnerabilityConnection {
	edges: maybe<ISecurityVulnerabilityEdge>, 
	nodes: maybe<ISecurityVulnerability>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ISecurityVulnerabilityEdge {
	cursor: string, 
	node: maybe<ISecurityVulnerability>
}

interface ISecurityVulnerability {
	advisory: ISecurityAdvisory, 
	firstPatchedVersion: maybe<ISecurityAdvisoryPackageVersion>, 
	package: ISecurityAdvisoryPackage, 
	severity: SecurityAdvisorySeverity, 
	updatedAt: string, 
	vulnerableVersionRange: string
}

interface ISecurityAdvisoryPackageVersion {
	identifier: string
}

interface ISecurityAdvisoryPackage {
	ecosystem: SecurityAdvisoryEcosystem, 
	name: string
}

interface IMutation {
	acceptTopicSuggestion: maybe<IAcceptTopicSuggestionPayload>, 
	addComment: maybe<IAddCommentPayload>, 
	addProjectCard: maybe<IAddProjectCardPayload>, 
	addProjectColumn: maybe<IAddProjectColumnPayload>, 
	addPullRequestReview: maybe<IAddPullRequestReviewPayload>, 
	addPullRequestReviewComment: maybe<IAddPullRequestReviewCommentPayload>, 
	addReaction: maybe<IAddReactionPayload>, 
	addStar: maybe<IAddStarPayload>, 
	createBranchProtectionRule: maybe<ICreateBranchProtectionRulePayload>, 
	createProject: maybe<ICreateProjectPayload>, 
	declineTopicSuggestion: maybe<IDeclineTopicSuggestionPayload>, 
	deleteBranchProtectionRule: maybe<IDeleteBranchProtectionRulePayload>, 
	deleteProject: maybe<IDeleteProjectPayload>, 
	deleteProjectCard: maybe<IDeleteProjectCardPayload>, 
	deleteProjectColumn: maybe<IDeleteProjectColumnPayload>, 
	deletePullRequestReview: maybe<IDeletePullRequestReviewPayload>, 
	dismissPullRequestReview: maybe<IDismissPullRequestReviewPayload>, 
	lockLockable: maybe<ILockLockablePayload>, 
	moveProjectCard: maybe<IMoveProjectCardPayload>, 
	moveProjectColumn: maybe<IMoveProjectColumnPayload>, 
	removeOutsideCollaborator: maybe<IRemoveOutsideCollaboratorPayload>, 
	removeReaction: maybe<IRemoveReactionPayload>, 
	removeStar: maybe<IRemoveStarPayload>, 
	requestReviews: maybe<IRequestReviewsPayload>, 
	submitPullRequestReview: maybe<ISubmitPullRequestReviewPayload>, 
	unlockLockable: maybe<IUnlockLockablePayload>, 
	updateBranchProtectionRule: maybe<IUpdateBranchProtectionRulePayload>, 
	updateProject: maybe<IUpdateProjectPayload>, 
	updateProjectCard: maybe<IUpdateProjectCardPayload>, 
	updateProjectColumn: maybe<IUpdateProjectColumnPayload>, 
	updatePullRequestReview: maybe<IUpdatePullRequestReviewPayload>, 
	updatePullRequestReviewComment: maybe<IUpdatePullRequestReviewCommentPayload>, 
	updateSubscription: maybe<IUpdateSubscriptionPayload>, 
	updateTopics: maybe<IUpdateTopicsPayload>
}

interface IAcceptTopicSuggestionPayload {
	clientMutationId: maybe<string>, 
	topic: maybe<ITopic>
}

interface IAddCommentPayload {
	clientMutationId: maybe<string>, 
	commentEdge: maybe<IIssueCommentEdge>, 
	subject: maybe<INode>, 
	timelineEdge: maybe<IIssueTimelineItemEdge>
}

interface IAddProjectCardPayload {
	cardEdge: maybe<IProjectCardEdge>, 
	clientMutationId: maybe<string>, 
	projectColumn: maybe<IProjectColumn>
}

interface IAddProjectColumnPayload {
	clientMutationId: maybe<string>, 
	columnEdge: maybe<IProjectColumnEdge>, 
	project: maybe<IProject>
}

interface IAddPullRequestReviewPayload {
	clientMutationId: maybe<string>, 
	pullRequestReview: maybe<IPullRequestReview>, 
	reviewEdge: maybe<IPullRequestReviewEdge>
}

interface IAddPullRequestReviewCommentPayload {
	clientMutationId: maybe<string>, 
	comment: maybe<IPullRequestReviewComment>, 
	commentEdge: maybe<IPullRequestReviewCommentEdge>
}

interface IAddReactionPayload {
	clientMutationId: maybe<string>, 
	reaction: maybe<IReaction>, 
	subject: maybe<IReactable>
}

interface IAddStarPayload {
	clientMutationId: maybe<string>, 
	starrable: maybe<IStarrable>
}

interface ICreateBranchProtectionRulePayload {
	branchProtectionRule: maybe<IBranchProtectionRule>, 
	clientMutationId: maybe<string>
}

interface ICreateProjectPayload {
	clientMutationId: maybe<string>, 
	project: maybe<IProject>
}

interface IDeclineTopicSuggestionPayload {
	clientMutationId: maybe<string>, 
	topic: maybe<ITopic>
}

interface IDeleteBranchProtectionRulePayload {
	clientMutationId: maybe<string>
}

interface IDeleteProjectPayload {
	clientMutationId: maybe<string>, 
	owner: maybe<IProjectOwner>
}

interface IDeleteProjectCardPayload {
	clientMutationId: maybe<string>, 
	column: maybe<IProjectColumn>, 
	deletedCardId: maybe<string>
}

interface IDeleteProjectColumnPayload {
	clientMutationId: maybe<string>, 
	deletedColumnId: maybe<string>, 
	project: maybe<IProject>
}

interface IDeletePullRequestReviewPayload {
	clientMutationId: maybe<string>, 
	pullRequestReview: maybe<IPullRequestReview>
}

interface IDismissPullRequestReviewPayload {
	clientMutationId: maybe<string>, 
	pullRequestReview: maybe<IPullRequestReview>
}

interface ILockLockablePayload {
	clientMutationId: maybe<string>, 
	lockedRecord: maybe<ILockable>
}

interface IMoveProjectCardPayload {
	cardEdge: maybe<IProjectCardEdge>, 
	clientMutationId: maybe<string>
}

interface IMoveProjectColumnPayload {
	clientMutationId: maybe<string>, 
	columnEdge: maybe<IProjectColumnEdge>
}

interface IRemoveOutsideCollaboratorPayload {
	clientMutationId: maybe<string>, 
	removedUser: maybe<IUser>
}

interface IRemoveReactionPayload {
	clientMutationId: maybe<string>, 
	reaction: maybe<IReaction>, 
	subject: maybe<IReactable>
}

interface IRemoveStarPayload {
	clientMutationId: maybe<string>, 
	starrable: maybe<IStarrable>
}

interface IRequestReviewsPayload {
	clientMutationId: maybe<string>, 
	pullRequest: maybe<IPullRequest>, 
	requestedReviewersEdge: maybe<IUserEdge>
}

interface ISubmitPullRequestReviewPayload {
	clientMutationId: maybe<string>, 
	pullRequestReview: maybe<IPullRequestReview>
}

interface IUnlockLockablePayload {
	clientMutationId: maybe<string>, 
	unlockedRecord: maybe<ILockable>
}

interface IUpdateBranchProtectionRulePayload {
	branchProtectionRule: maybe<IBranchProtectionRule>, 
	clientMutationId: maybe<string>
}

interface IUpdateProjectPayload {
	clientMutationId: maybe<string>, 
	project: maybe<IProject>
}

interface IUpdateProjectCardPayload {
	clientMutationId: maybe<string>, 
	projectCard: maybe<IProjectCard>
}

interface IUpdateProjectColumnPayload {
	clientMutationId: maybe<string>, 
	projectColumn: maybe<IProjectColumn>
}

interface IUpdatePullRequestReviewPayload {
	clientMutationId: maybe<string>, 
	pullRequestReview: maybe<IPullRequestReview>
}

interface IUpdatePullRequestReviewCommentPayload {
	clientMutationId: maybe<string>, 
	pullRequestReviewComment: maybe<IPullRequestReviewComment>
}

interface IUpdateSubscriptionPayload {
	clientMutationId: maybe<string>, 
	subscribable: maybe<ISubscribable>
}

interface IUpdateTopicsPayload {
	clientMutationId: maybe<string>, 
	invalidTopicNames: maybe<string>, 
	repository: maybe<IRepository>
}

interface IRepositoryInvitationEdge {
	cursor: string, 
	node: maybe<IRepositoryInvitation>
}

interface IRepositoryInvitation {
	id: string, 
	invitee: IUser, 
	inviter: IUser, 
	permission: RepositoryPermission, 
	repository: maybe<IRepositoryInfo>
}

interface IBot {
	avatarUrl: string, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string, 
	login: string, 
	resourcePath: string, 
	updatedAt: string, 
	url: string
}

interface IBlob {
	abbreviatedOid: string, 
	byteSize: number, 
	commitResourcePath: string, 
	commitUrl: string, 
	id: string, 
	isBinary: boolean, 
	isTruncated: boolean, 
	oid: any, 
	repository: IRepository, 
	text: maybe<string>
}

interface IPullRequestTimelineItemsEdge {
	cursor: string, 
	node: maybe<PullRequestTimelineItems>
}

interface IBaseRefChangedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string
}

interface IAddedToProjectEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string
}

interface ICommentDeletedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string
}

interface IConvertedNoteToIssueEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string
}

interface IMentionedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string
}

interface IMovedColumnsInProjectEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string
}

interface IPinnedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	issue: IIssue
}

interface IRemovedFromProjectEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	databaseId: maybe<number>, 
	id: string
}

interface IUnpinnedEvent {
	actor: maybe<IActor>, 
	createdAt: string, 
	id: string, 
	issue: IIssue
}

interface IIssueTimelineItemsEdge {
	cursor: string, 
	node: maybe<IssueTimelineItems>
}

interface ITopicConnection {
	edges: maybe<ITopicEdge>, 
	nodes: maybe<ITopic>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ITopicEdge {
	cursor: string, 
	node: maybe<ITopic>
}

interface ICreatedPullRequestContributionConnection {
	edges: maybe<ICreatedPullRequestContributionEdge>, 
	nodes: maybe<ICreatedPullRequestContribution>, 
	pageInfo: IPageInfo, 
	totalCount: number
}

interface ICreatedPullRequestContributionEdge {
	cursor: string, 
	node: maybe<ICreatedPullRequestContribution>
}

interface IAppEdge {
	cursor: string, 
	node: maybe<IApp>
}

interface IContentAttachment {
	body: string, 
	contentReference: IContentReference, 
	databaseId: number, 
	id: string, 
	title: string
}

interface IContentReference {
	databaseId: number, 
	id: string, 
	reference: string
}

interface IGpgSignature {
	email: string, 
	isValid: boolean, 
	keyId: maybe<string>, 
	payload: string, 
	signature: string, 
	signer: maybe<IUser>, 
	state: GitSignatureState, 
	wasSignedByGitHub: boolean
}

interface ISmimeSignature {
	email: string, 
	isValid: boolean, 
	payload: string, 
	signature: string, 
	signer: maybe<IUser>, 
	state: GitSignatureState, 
	wasSignedByGitHub: boolean
}

interface ITag {
	abbreviatedOid: string, 
	commitResourcePath: string, 
	commitUrl: string, 
	id: string, 
	message: maybe<string>, 
	name: string, 
	oid: any, 
	repository: IRepository, 
	tagger: maybe<IGitActor>, 
	target: IGitObject
}

interface IUnknownSignature {
	email: string, 
	isValid: boolean, 
	payload: string, 
	signature: string, 
	signer: maybe<IUser>, 
	state: GitSignatureState, 
	wasSignedByGitHub: boolean
}
// UNION TYPES 
type ProjectCardItem = IIssue | IPullRequest

type RequestedReviewer = IUser | ITeam

type PullRequestTimelineItem = ICommit | ICommitCommentThread | IPullRequestReview | IPullRequestReviewThread | IPullRequestReviewComment | IIssueComment | IClosedEvent | IReopenedEvent | ISubscribedEvent | IUnsubscribedEvent | IMergedEvent | IReferencedEvent | ICrossReferencedEvent | IAssignedEvent | IUnassignedEvent | ILabeledEvent | IUnlabeledEvent | IMilestonedEvent | IDemilestonedEvent | IRenamedTitleEvent | ILockedEvent | IUnlockedEvent | IDeployedEvent | IDeploymentEnvironmentChangedEvent | IHeadRefDeletedEvent | IHeadRefRestoredEvent | IHeadRefForcePushedEvent | IBaseRefForcePushedEvent | IReviewRequestedEvent | IReviewRequestRemovedEvent | IReviewDismissedEvent

type Closer = ICommit | IPullRequest

type ReferencedSubject = IIssue | IPullRequest

type MilestoneItem = IIssue | IPullRequest

type RenamedTitleSubject = IIssue | IPullRequest

type PushAllowanceActor = IUser | ITeam

type ReviewDismissalAllowanceActor = IUser | ITeam

type IssueOrPullRequest = IIssue | IPullRequest

type CreatedIssueOrRestrictedContribution = ICreatedIssueContribution | IRestrictedContribution

type CreatedPullRequestOrRestrictedContribution = ICreatedPullRequestContribution | IRestrictedContribution

type IssueTimelineItem = ICommit | IIssueComment | ICrossReferencedEvent | IClosedEvent | IReopenedEvent | ISubscribedEvent | IUnsubscribedEvent | IReferencedEvent | IAssignedEvent | IUnassignedEvent | ILabeledEvent | IUnlabeledEvent | IMilestonedEvent | IDemilestonedEvent | IRenamedTitleEvent | ILockedEvent | IUnlockedEvent | ITransferredEvent

type SearchResultItem = IIssue | IPullRequest | IRepository | IUser | IOrganization | IMarketplaceListing

type PullRequestTimelineItems = IPullRequestCommit | IPullRequestReview | IPullRequestReviewThread | IBaseRefChangedEvent | IBaseRefForcePushedEvent | IDeployedEvent | IDeploymentEnvironmentChangedEvent | IHeadRefDeletedEvent | IHeadRefForcePushedEvent | IHeadRefRestoredEvent | IMergedEvent | IReviewDismissedEvent | IReviewRequestedEvent | IReviewRequestRemovedEvent | IIssueComment | ICrossReferencedEvent | IAddedToProjectEvent | IAssignedEvent | IClosedEvent | ICommentDeletedEvent | IConvertedNoteToIssueEvent | IDemilestonedEvent | ILabeledEvent | ILockedEvent | IMentionedEvent | IMilestonedEvent | IMovedColumnsInProjectEvent | IPinnedEvent | IReferencedEvent | IRemovedFromProjectEvent | IRenamedTitleEvent | IReopenedEvent | ISubscribedEvent | ITransferredEvent | IUnassignedEvent | IUnlabeledEvent | IUnlockedEvent | IUnpinnedEvent | IUnsubscribedEvent

type IssueTimelineItems = IIssueComment | ICrossReferencedEvent | IAddedToProjectEvent | IAssignedEvent | IClosedEvent | ICommentDeletedEvent | IConvertedNoteToIssueEvent | IDemilestonedEvent | ILabeledEvent | ILockedEvent | IMentionedEvent | IMilestonedEvent | IMovedColumnsInProjectEvent | IPinnedEvent | IReferencedEvent | IRemovedFromProjectEvent | IRenamedTitleEvent | IReopenedEvent | ISubscribedEvent | ITransferredEvent | IUnassignedEvent | IUnlabeledEvent | IUnlockedEvent | IUnpinnedEvent | IUnsubscribedEvent

type CollectionItemContent = IRepository | IOrganization | IUser
// INPUT TYPES 
interface IRepositoryOrder {
	field: RepositoryOrderField, 
	direction: OrderDirection
}

interface IStarOrder {
	field: StarOrderField, 
	direction: OrderDirection
}

interface IIssueOrder {
	field: IssueOrderField, 
	direction: OrderDirection
}

interface IReactionOrder {
	field: ReactionOrderField, 
	direction: OrderDirection
}

interface ICommitAuthor {
	id: maybe<string>, 
	emails: maybe<string>
}

interface ITeamOrder {
	field: TeamOrderField, 
	direction: OrderDirection
}

interface ITeamMemberOrder {
	field: TeamMemberOrderField, 
	direction: OrderDirection
}

interface ITeamRepositoryOrder {
	field: TeamRepositoryOrderField, 
	direction: OrderDirection
}

interface ILanguageOrder {
	field: LanguageOrderField, 
	direction: OrderDirection
}

interface IMilestoneOrder {
	field: MilestoneOrderField, 
	direction: OrderDirection
}

interface IProjectOrder {
	field: ProjectOrderField, 
	direction: OrderDirection
}

interface IRefOrder {
	field: RefOrderField, 
	direction: OrderDirection
}

interface IReleaseOrder {
	field: ReleaseOrderField, 
	direction: OrderDirection
}

interface IGistOrder {
	field: GistOrderField, 
	direction: OrderDirection
}

interface ISecurityAdvisoryOrder {
	field: SecurityAdvisoryOrderField, 
	direction: OrderDirection
}

interface ISecurityAdvisoryIdentifierFilter {
	type: SecurityAdvisoryIdentifierType, 
	value: string
}

interface ISecurityVulnerabilityOrder {
	field: SecurityVulnerabilityOrderField, 
	direction: OrderDirection
}

interface IAcceptTopicSuggestionInput {
	repositoryId: string, 
	name: string, 
	clientMutationId: maybe<string>
}

interface IAddCommentInput {
	subjectId: string, 
	body: string, 
	clientMutationId: maybe<string>
}

interface IAddProjectCardInput {
	projectColumnId: string, 
	contentId: maybe<string>, 
	note: maybe<string>, 
	clientMutationId: maybe<string>
}

interface IAddProjectColumnInput {
	projectId: string, 
	name: string, 
	clientMutationId: maybe<string>
}

interface IAddPullRequestReviewInput {
	pullRequestId: string, 
	commitOID: maybe<any>, 
	body: maybe<string>, 
	event: maybe<PullRequestReviewEvent>, 
	comments: maybe<IDraftPullRequestReviewComment>, 
	clientMutationId: maybe<string>
}

interface IDraftPullRequestReviewComment {
	path: string, 
	position: number, 
	body: string
}

interface IAddPullRequestReviewCommentInput {
	pullRequestReviewId: string, 
	commitOID: maybe<any>, 
	body: string, 
	path: maybe<string>, 
	position: maybe<number>, 
	inReplyTo: maybe<string>, 
	clientMutationId: maybe<string>
}

interface IAddReactionInput {
	subjectId: string, 
	content: ReactionContent, 
	clientMutationId: maybe<string>
}

interface IAddStarInput {
	starrableId: string, 
	clientMutationId: maybe<string>
}

interface ICreateBranchProtectionRuleInput {
	repositoryId: string, 
	pattern: string, 
	requiresApprovingReviews: maybe<boolean>, 
	requiredApprovingReviewCount: maybe<number>, 
	requiresCommitSignatures: maybe<boolean>, 
	isAdminEnforced: maybe<boolean>, 
	requiresStatusChecks: maybe<boolean>, 
	requiresStrictStatusChecks: maybe<boolean>, 
	requiresCodeOwnerReviews: maybe<boolean>, 
	dismissesStaleReviews: maybe<boolean>, 
	restrictsReviewDismissals: maybe<boolean>, 
	reviewDismissalActorIds: maybe<string>, 
	restrictsPushes: maybe<boolean>, 
	pushActorIds: maybe<string>, 
	requiredStatusCheckContexts: maybe<string>, 
	clientMutationId: maybe<string>
}

interface ICreateProjectInput {
	ownerId: string, 
	name: string, 
	body: maybe<string>, 
	clientMutationId: maybe<string>
}

interface IDeclineTopicSuggestionInput {
	repositoryId: string, 
	name: string, 
	reason: TopicSuggestionDeclineReason, 
	clientMutationId: maybe<string>
}

interface IDeleteBranchProtectionRuleInput {
	branchProtectionRuleId: string, 
	clientMutationId: maybe<string>
}

interface IDeleteProjectInput {
	projectId: string, 
	clientMutationId: maybe<string>
}

interface IDeleteProjectCardInput {
	cardId: string, 
	clientMutationId: maybe<string>
}

interface IDeleteProjectColumnInput {
	columnId: string, 
	clientMutationId: maybe<string>
}

interface IDeletePullRequestReviewInput {
	pullRequestReviewId: string, 
	clientMutationId: maybe<string>
}

interface IDismissPullRequestReviewInput {
	pullRequestReviewId: string, 
	message: string, 
	clientMutationId: maybe<string>
}

interface ILockLockableInput {
	lockableId: string, 
	lockReason: maybe<LockReason>, 
	clientMutationId: maybe<string>
}

interface IMoveProjectCardInput {
	cardId: string, 
	columnId: string, 
	afterCardId: maybe<string>, 
	clientMutationId: maybe<string>
}

interface IMoveProjectColumnInput {
	columnId: string, 
	afterColumnId: maybe<string>, 
	clientMutationId: maybe<string>
}

interface IRemoveOutsideCollaboratorInput {
	userId: string, 
	organizationId: string, 
	clientMutationId: maybe<string>
}

interface IRemoveReactionInput {
	subjectId: string, 
	content: ReactionContent, 
	clientMutationId: maybe<string>
}

interface IRemoveStarInput {
	starrableId: string, 
	clientMutationId: maybe<string>
}

interface IRequestReviewsInput {
	pullRequestId: string, 
	userIds: maybe<string>, 
	teamIds: maybe<string>, 
	union: maybe<boolean>, 
	clientMutationId: maybe<string>
}

interface ISubmitPullRequestReviewInput {
	pullRequestReviewId: string, 
	event: PullRequestReviewEvent, 
	body: maybe<string>, 
	clientMutationId: maybe<string>
}

interface IUnlockLockableInput {
	lockableId: string, 
	clientMutationId: maybe<string>
}

interface IUpdateBranchProtectionRuleInput {
	branchProtectionRuleId: string, 
	pattern: maybe<string>, 
	requiresApprovingReviews: maybe<boolean>, 
	requiredApprovingReviewCount: maybe<number>, 
	requiresCommitSignatures: maybe<boolean>, 
	isAdminEnforced: maybe<boolean>, 
	requiresStatusChecks: maybe<boolean>, 
	requiresStrictStatusChecks: maybe<boolean>, 
	requiresCodeOwnerReviews: maybe<boolean>, 
	dismissesStaleReviews: maybe<boolean>, 
	restrictsReviewDismissals: maybe<boolean>, 
	reviewDismissalActorIds: maybe<string>, 
	restrictsPushes: maybe<boolean>, 
	pushActorIds: maybe<string>, 
	requiredStatusCheckContexts: maybe<string>, 
	clientMutationId: maybe<string>
}

interface IUpdateProjectInput {
	projectId: string, 
	name: maybe<string>, 
	body: maybe<string>, 
	state: maybe<ProjectState>, 
	public: maybe<boolean>, 
	clientMutationId: maybe<string>
}

interface IUpdateProjectCardInput {
	projectCardId: string, 
	isArchived: maybe<boolean>, 
	note: maybe<string>, 
	clientMutationId: maybe<string>
}

interface IUpdateProjectColumnInput {
	projectColumnId: string, 
	name: string, 
	clientMutationId: maybe<string>
}

interface IUpdatePullRequestReviewInput {
	pullRequestReviewId: string, 
	body: string, 
	clientMutationId: maybe<string>
}

interface IUpdatePullRequestReviewCommentInput {
	pullRequestReviewCommentId: string, 
	body: string, 
	clientMutationId: maybe<string>
}

interface IUpdateSubscriptionInput {
	subscribableId: string, 
	state: SubscriptionState, 
	clientMutationId: maybe<string>
}

interface IUpdateTopicsInput {
	repositoryId: string, 
	topicNames: string, 
	clientMutationId: maybe<string>
}

interface IPullRequestOrder {
	field: PullRequestOrderField, 
	direction: OrderDirection
}

interface IMinimizeCommentInput {
	subjectId: string, 
	classifier: ReportedContentClassifiers, 
	clientMutationId: maybe<string>
}

interface IUnminimizeCommentInput {
	subjectId: string, 
	clientMutationId: maybe<string>
}

interface IDeleteIssueInput {
	issueId: string, 
	clientMutationId: maybe<string>
}

interface IPinIssueInput {
	issueId: string, 
	clientMutationId: maybe<string>
}

interface IUnpinIssueInput {
	issueId: string, 
	clientMutationId: maybe<string>
}

interface IResolveReviewThreadInput {
	threadId: string, 
	clientMutationId: maybe<string>
}

interface IUnresolveReviewThreadInput {
	threadId: string, 
	clientMutationId: maybe<string>
}

interface ICreateContentAttachmentInput {
	contentReferenceId: string, 
	title: string, 
	body: string, 
	clientMutationId: maybe<string>
}
// ARGUMENT INTERFACES 
interface IARGActor {
	avatarUrl: {
		size: maybe<number>
	}
}

interface IARGProjectOwner {
	project: {
		number: number
	} & maybe<IARGProject>, 
	projects: {
		orderBy: maybe<IProjectOrder>, 
	search: maybe<string>, 
	states: maybe<ProjectState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IProjectConnection
}

interface IARGAssignable {
	assignees: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IUserConnection
}

interface IARGRepositoryOwner {
	avatarUrl: {
		size: maybe<number>
	},
pinnedRepositories: {
		privacy: maybe<RepositoryPrivacy>, 
	orderBy: maybe<IRepositoryOrder>, 
	affiliations: maybe<RepositoryAffiliation>, 
	ownerAffiliations: maybe<RepositoryAffiliation>, 
	isLocked: maybe<boolean>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IRepositoryConnection, 
	repositories: {
		privacy: maybe<RepositoryPrivacy>, 
	orderBy: maybe<IRepositoryOrder>, 
	affiliations: maybe<RepositoryAffiliation>, 
	ownerAffiliations: maybe<RepositoryAffiliation>, 
	isLocked: maybe<boolean>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	isFork: maybe<boolean>
	} & IRepositoryConnection, 
	repository: {
		name: string
	} & maybe<IARGRepository>
}

interface IARGStarrable {
	stargazers: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	orderBy: maybe<IStarOrder>
	} & IStargazerConnection
}

interface IARGRepositoryInfo {
	shortDescriptionHTML: {
		limit: maybe<number>
	},
licenseInfo: maybe<ILicense>, 
	owner: IRepositoryOwner
}

interface IARGComment {
	author: maybe<IActor>, 
	editor: maybe<IActor>,
userContentEdits: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IUserContentEditConnection>
}

interface IARGLabelable {
	labels: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<ILabelConnection>
}

interface IARGReactable {
	reactionGroups: maybe<IReactionGroup>,
reactions: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	content: maybe<ReactionContent>, 
	orderBy: maybe<IReactionOrder>
	} & IReactionConnection
}

interface IARGQuery {
	codesOfConduct: maybe<ICodeOfConduct>, 
	licenses: ILicense, 
	meta: IGitHubMetadata, 
	relay: IQuery, 
	viewer: IUser,
codeOfConduct: {
		key: string
	} & maybe<ICodeOfConduct>, 
	license: {
		key: string
	} & maybe<ILicense>, 
	marketplaceCategories: {
		includeCategories: maybe<string>, 
	excludeEmpty: maybe<boolean>, 
	excludeSubcategories: maybe<boolean>
	} & IMarketplaceCategory, 
	marketplaceCategory: {
		slug: string, 
	useTopicAliases: maybe<boolean>
	} & maybe<IMarketplaceCategory>, 
	marketplaceListing: {
		slug: string
	} & maybe<IARGMarketplaceListing>, 
	marketplaceListings: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	categorySlug: maybe<string>, 
	useTopicAliases: maybe<boolean>, 
	viewerCanAdmin: maybe<boolean>, 
	adminId: maybe<string>, 
	organizationId: maybe<string>, 
	allStates: maybe<boolean>, 
	slugs: maybe<string>, 
	primaryCategoryOnly: maybe<boolean>, 
	withFreeTrialsOnly: maybe<boolean>
	} & IMarketplaceListingConnection, 
	node: {
		id: string
	} & maybe<INode>, 
	nodes: {
		ids: string
	} & INode, 
	organization: {
		login: string
	} & maybe<IARGOrganization>, 
	rateLimit: {
		dryRun: maybe<boolean>
	} & maybe<IRateLimit>, 
	repository: {
		owner: string, 
	name: string
	} & maybe<IARGRepository>, 
	repositoryOwner: {
		login: string
	} & maybe<IARGRepositoryOwner>, 
	resource: {
		url: string
	} & maybe<IUniformResourceLocatable>, 
	search: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	query: string, 
	type: SearchType
	} & ISearchResultItemConnection, 
	securityAdvisories: {
		orderBy: maybe<ISecurityAdvisoryOrder>, 
	identifier: maybe<ISecurityAdvisoryIdentifierFilter>, 
	publishedSince: maybe<string>, 
	updatedSince: maybe<string>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ISecurityAdvisoryConnection, 
	securityAdvisory: {
		ghsaId: string
	} & maybe<IARGSecurityAdvisory>, 
	securityVulnerabilities: {
		orderBy: maybe<ISecurityVulnerabilityOrder>, 
	ecosystem: maybe<SecurityAdvisoryEcosystem>, 
	package: maybe<string>, 
	severities: maybe<SecurityAdvisorySeverity>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ISecurityVulnerabilityConnection, 
	topic: {
		name: string
	} & maybe<IARGTopic>, 
	user: {
		login: string
	} & maybe<IARGUser>
}

interface IARGMarketplaceListing {
	logoUrl: {
		size: maybe<number>
	},
app: maybe<IApp>, 
	primaryCategory: IMarketplaceCategory, 
	secondaryCategory: maybe<IMarketplaceCategory>
}

interface IARGApp {
	logoUrl: {
		size: maybe<number>
	}
}

interface IARGOrganization {
	avatarUrl: {
		size: maybe<number>
	},
samlIdentityProvider: maybe<IOrganizationIdentityProvider>,
members: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IUserConnection, 
	membersWithRole: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IOrganizationMemberConnection, 
	pendingMembers: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IUserConnection, 
	pinnedRepositories: {
		privacy: maybe<RepositoryPrivacy>, 
	orderBy: maybe<IRepositoryOrder>, 
	affiliations: maybe<RepositoryAffiliation>, 
	ownerAffiliations: maybe<RepositoryAffiliation>, 
	isLocked: maybe<boolean>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IRepositoryConnection, 
	project: {
		number: number
	} & maybe<IARGProject>, 
	projects: {
		orderBy: maybe<IProjectOrder>, 
	search: maybe<string>, 
	states: maybe<ProjectState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IProjectConnection, 
	repositories: {
		privacy: maybe<RepositoryPrivacy>, 
	orderBy: maybe<IRepositoryOrder>, 
	affiliations: maybe<RepositoryAffiliation>, 
	ownerAffiliations: maybe<RepositoryAffiliation>, 
	isLocked: maybe<boolean>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	isFork: maybe<boolean>
	} & IRepositoryConnection, 
	repository: {
		name: string
	} & maybe<IARGRepository>, 
	team: {
		slug: string
	} & maybe<IARGTeam>, 
	teams: {
		privacy: maybe<TeamPrivacy>, 
	role: maybe<TeamRole>, 
	query: maybe<string>, 
	userLogins: maybe<string>, 
	orderBy: maybe<ITeamOrder>, 
	ldapMapped: maybe<boolean>, 
	rootTeamsOnly: maybe<boolean>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ITeamConnection
}

interface IARGProject {
	creator: maybe<IActor>, 
	owner: IProjectOwner,
columns: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IProjectColumnConnection, 
	pendingCards: {
		archivedStates: maybe<ProjectCardArchivedState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IProjectCardConnection
}

interface IARGProjectColumn {
	project: IProject,
cards: {
		archivedStates: maybe<ProjectCardArchivedState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IProjectCardConnection
}

interface IARGIssue {
	author: maybe<IActor>, 
	editor: maybe<IActor>, 
	milestone: maybe<IMilestone>, 
	reactionGroups: maybe<IReactionGroup>, 
	repository: IRepository,
assignees: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IUserConnection, 
	comments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IIssueCommentConnection, 
	labels: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<ILabelConnection>, 
	participants: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IUserConnection, 
	projectCards: {
		archivedStates: maybe<ProjectCardArchivedState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IProjectCardConnection, 
	reactions: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	content: maybe<ReactionContent>, 
	orderBy: maybe<IReactionOrder>
	} & IReactionConnection, 
	timeline: {
		since: maybe<string>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IIssueTimelineConnection, 
	userContentEdits: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IUserContentEditConnection>
}

interface IARGUser {
	avatarUrl: {
		size: maybe<number>
	},
commitComments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ICommitCommentConnection, 
	contributionsCollection: {
		organizationID: maybe<string>, 
	from: maybe<string>, 
	to: maybe<string>
	} & IARGContributionsCollection, 
	followers: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IFollowerConnection, 
	following: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IFollowingConnection, 
	gist: {
		name: string
	} & maybe<IARGGist>, 
	gistComments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IGistCommentConnection, 
	gists: {
		privacy: maybe<GistPrivacy>, 
	orderBy: maybe<IGistOrder>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IGistConnection, 
	issueComments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IIssueCommentConnection, 
	issues: {
		orderBy: maybe<IIssueOrder>, 
	labels: maybe<string>, 
	states: maybe<IssueState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IIssueConnection, 
	organization: {
		login: string
	} & maybe<IARGOrganization>, 
	organizations: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IOrganizationConnection, 
	pinnedRepositories: {
		privacy: maybe<RepositoryPrivacy>, 
	orderBy: maybe<IRepositoryOrder>, 
	affiliations: maybe<RepositoryAffiliation>, 
	ownerAffiliations: maybe<RepositoryAffiliation>, 
	isLocked: maybe<boolean>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IRepositoryConnection, 
	publicKeys: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPublicKeyConnection, 
	pullRequests: {
		states: maybe<PullRequestState>, 
	labels: maybe<string>, 
	headRefName: maybe<string>, 
	baseRefName: maybe<string>, 
	orderBy: maybe<IIssueOrder>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPullRequestConnection, 
	repositories: {
		privacy: maybe<RepositoryPrivacy>, 
	orderBy: maybe<IRepositoryOrder>, 
	affiliations: maybe<RepositoryAffiliation>, 
	ownerAffiliations: maybe<RepositoryAffiliation>, 
	isLocked: maybe<boolean>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	isFork: maybe<boolean>
	} & IRepositoryConnection, 
	repositoriesContributedTo: {
		privacy: maybe<RepositoryPrivacy>, 
	orderBy: maybe<IRepositoryOrder>, 
	isLocked: maybe<boolean>, 
	includeUserRepositories: maybe<boolean>, 
	contributionTypes: maybe<RepositoryContributionType>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IRepositoryConnection, 
	repository: {
		name: string
	} & maybe<IARGRepository>, 
	starredRepositories: {
		ownedByViewer: maybe<boolean>, 
	orderBy: maybe<IStarOrder>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IStarredRepositoryConnection, 
	watching: {
		privacy: maybe<RepositoryPrivacy>, 
	orderBy: maybe<IRepositoryOrder>, 
	affiliations: maybe<RepositoryAffiliation>, 
	ownerAffiliations: maybe<RepositoryAffiliation>, 
	isLocked: maybe<boolean>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IRepositoryConnection
}

interface IARGRepository {
	shortDescriptionHTML: {
		limit: maybe<number>
	},
codeOfConduct: maybe<ICodeOfConduct>, 
	defaultBranchRef: maybe<IRef>, 
	licenseInfo: maybe<ILicense>, 
	owner: IRepositoryOwner, 
	parent: maybe<IRepository>, 
	primaryLanguage: maybe<ILanguage>,
assignableUsers: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IUserConnection, 
	branchProtectionRules: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IBranchProtectionRuleConnection, 
	collaborators: {
		affiliation: maybe<CollaboratorAffiliation>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IRepositoryCollaboratorConnection>, 
	commitComments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ICommitCommentConnection, 
	deployKeys: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IDeployKeyConnection, 
	deployments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	environments: maybe<string>
	} & IDeploymentConnection, 
	forks: {
		privacy: maybe<RepositoryPrivacy>, 
	orderBy: maybe<IRepositoryOrder>, 
	affiliations: maybe<RepositoryAffiliation>, 
	ownerAffiliations: maybe<RepositoryAffiliation>, 
	isLocked: maybe<boolean>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IRepositoryConnection, 
	issue: {
		number: number
	} & maybe<IARGIssue>, 
	issueOrPullRequest: {
		number: number
	} & maybe<IssueOrPullRequest>, 
	issues: {
		orderBy: maybe<IIssueOrder>, 
	labels: maybe<string>, 
	states: maybe<IssueState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IIssueConnection, 
	label: {
		name: string
	} & maybe<IARGLabel>, 
	labels: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	query: maybe<string>
	} & maybe<ILabelConnection>, 
	languages: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	orderBy: maybe<ILanguageOrder>
	} & maybe<ILanguageConnection>, 
	mentionableUsers: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IUserConnection, 
	milestone: {
		number: number
	} & maybe<IARGMilestone>, 
	milestones: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	states: maybe<MilestoneState>, 
	orderBy: maybe<IMilestoneOrder>
	} & maybe<IMilestoneConnection>, 
	object: {
		oid: maybe<any>, 
	expression: maybe<string>
	} & maybe<IGitObject>, 
	project: {
		number: number
	} & maybe<IARGProject>, 
	projects: {
		orderBy: maybe<IProjectOrder>, 
	search: maybe<string>, 
	states: maybe<ProjectState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IProjectConnection, 
	protectedBranches: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IProtectedBranchConnection, 
	pullRequest: {
		number: number
	} & maybe<IARGPullRequest>, 
	pullRequests: {
		states: maybe<PullRequestState>, 
	labels: maybe<string>, 
	headRefName: maybe<string>, 
	baseRefName: maybe<string>, 
	orderBy: maybe<IIssueOrder>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPullRequestConnection, 
	ref: {
		qualifiedName: string
	} & maybe<IARGRef>, 
	refs: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	refPrefix: string, 
	direction: maybe<OrderDirection>, 
	orderBy: maybe<IRefOrder>
	} & maybe<IRefConnection>, 
	release: {
		tagName: string
	} & maybe<IARGRelease>, 
	releases: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	orderBy: maybe<IReleaseOrder>
	} & IReleaseConnection, 
	repositoryTopics: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IRepositoryTopicConnection, 
	stargazers: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	orderBy: maybe<IStarOrder>
	} & IStargazerConnection, 
	watchers: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IUserConnection
}

interface IARGBranchProtectionRule {
	creator: maybe<IActor>, 
	repository: maybe<IRepository>,
branchProtectionRuleConflicts: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IBranchProtectionRuleConflictConnection, 
	matchingRefs: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IRefConnection, 
	pushAllowances: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPushAllowanceConnection, 
	reviewDismissalAllowances: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IReviewDismissalAllowanceConnection
}

interface IARGRef {
	repository: IRepository, 
	target: IGitObject,
associatedPullRequests: {
		states: maybe<PullRequestState>, 
	labels: maybe<string>, 
	headRefName: maybe<string>, 
	baseRefName: maybe<string>, 
	orderBy: maybe<IIssueOrder>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPullRequestConnection
}

interface IARGPullRequest {
	author: maybe<IActor>, 
	baseRef: maybe<IRef>, 
	editor: maybe<IActor>, 
	headRef: maybe<IRef>, 
	headRepository: maybe<IRepository>, 
	headRepositoryOwner: maybe<IRepositoryOwner>, 
	mergeCommit: maybe<ICommit>, 
	mergedBy: maybe<IActor>, 
	milestone: maybe<IMilestone>, 
	potentialMergeCommit: maybe<ICommit>, 
	reactionGroups: maybe<IReactionGroup>, 
	repository: IRepository, 
	suggestedReviewers: ISuggestedReviewer,
assignees: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IUserConnection, 
	comments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IIssueCommentConnection, 
	commits: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPullRequestCommitConnection, 
	labels: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<ILabelConnection>, 
	participants: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IUserConnection, 
	projectCards: {
		archivedStates: maybe<ProjectCardArchivedState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IProjectCardConnection, 
	reactions: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	content: maybe<ReactionContent>, 
	orderBy: maybe<IReactionOrder>
	} & IReactionConnection, 
	reviewRequests: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IReviewRequestConnection>, 
	reviews: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	states: maybe<PullRequestReviewState>, 
	author: maybe<string>
	} & maybe<IPullRequestReviewConnection>, 
	timeline: {
		since: maybe<string>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPullRequestTimelineConnection, 
	userContentEdits: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IUserContentEditConnection>
}

interface IARGLabel {
	repository: IRepository,
issues: {
		orderBy: maybe<IIssueOrder>, 
	labels: maybe<string>, 
	states: maybe<IssueState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IIssueConnection, 
	pullRequests: {
		states: maybe<PullRequestState>, 
	labels: maybe<string>, 
	headRefName: maybe<string>, 
	baseRefName: maybe<string>, 
	orderBy: maybe<IIssueOrder>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPullRequestConnection
}

interface IARGReactionGroup {
	subject: IReactable,
users: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IReactingUserConnection
}

interface IARGIssueComment {
	author: maybe<IActor>, 
	editor: maybe<IActor>, 
	issue: IIssue, 
	pullRequest: maybe<IPullRequest>, 
	reactionGroups: maybe<IReactionGroup>, 
	repository: IRepository,
reactions: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	content: maybe<ReactionContent>, 
	orderBy: maybe<IReactionOrder>
	} & IReactionConnection, 
	userContentEdits: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IUserContentEditConnection>
}

interface IARGCommit {
	author: maybe<IGitActor>, 
	committer: maybe<IGitActor>, 
	repository: IRepository, 
	signature: maybe<IGitSignature>, 
	status: maybe<IStatus>, 
	tree: ITree,
blame: {
		path: string
	} & IBlame, 
	comments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ICommitCommentConnection, 
	history: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	path: maybe<string>, 
	author: maybe<ICommitAuthor>, 
	since: maybe<any>, 
	until: maybe<any>
	} & ICommitHistoryConnection, 
	parents: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ICommitConnection
}

interface IARGGitActor {
	avatarUrl: {
		size: maybe<number>
	},
user: maybe<IUser>
}

interface IARGCommitComment {
	author: maybe<IActor>, 
	commit: maybe<ICommit>, 
	editor: maybe<IActor>, 
	reactionGroups: maybe<IReactionGroup>, 
	repository: IRepository,
reactions: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	content: maybe<ReactionContent>, 
	orderBy: maybe<IReactionOrder>
	} & IReactionConnection, 
	userContentEdits: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IUserContentEditConnection>
}

interface IARGStatus {
	commit: maybe<ICommit>, 
	contexts: IStatusContext,
context: {
		name: string
	} & maybe<IStatusContext>
}

interface IARGMilestone {
	creator: maybe<IActor>, 
	repository: IRepository,
issues: {
		orderBy: maybe<IIssueOrder>, 
	labels: maybe<string>, 
	states: maybe<IssueState>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IIssueConnection, 
	pullRequests: {
		states: maybe<PullRequestState>, 
	labels: maybe<string>, 
	headRefName: maybe<string>, 
	baseRefName: maybe<string>, 
	orderBy: maybe<IIssueOrder>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPullRequestConnection
}

interface IARGTeam {
	avatarUrl: {
		size: maybe<number>
	},
organization: IOrganization, 
	parentTeam: maybe<ITeam>,
ancestors: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ITeamConnection, 
	childTeams: {
		orderBy: maybe<ITeamOrder>, 
	userLogins: maybe<string>, 
	immediateOnly: maybe<boolean>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ITeamConnection, 
	invitations: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IOrganizationInvitationConnection>, 
	members: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	query: maybe<string>, 
	membership: maybe<TeamMembershipType>, 
	role: maybe<TeamMemberRole>, 
	orderBy: maybe<ITeamMemberOrder>
	} & ITeamMemberConnection, 
	repositories: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	query: maybe<string>, 
	orderBy: maybe<ITeamRepositoryOrder>
	} & ITeamRepositoryConnection
}

interface IARGPullRequestReview {
	author: maybe<IActor>, 
	commit: maybe<ICommit>, 
	editor: maybe<IActor>, 
	pullRequest: IPullRequest, 
	reactionGroups: maybe<IReactionGroup>, 
	repository: IRepository,
comments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPullRequestReviewCommentConnection, 
	onBehalfOf: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ITeamConnection, 
	reactions: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	content: maybe<ReactionContent>, 
	orderBy: maybe<IReactionOrder>
	} & IReactionConnection, 
	userContentEdits: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IUserContentEditConnection>
}

interface IARGPullRequestReviewComment {
	author: maybe<IActor>, 
	commit: ICommit, 
	editor: maybe<IActor>, 
	originalCommit: maybe<ICommit>, 
	pullRequest: IPullRequest, 
	pullRequestReview: maybe<IPullRequestReview>, 
	reactionGroups: maybe<IReactionGroup>, 
	replyTo: maybe<IPullRequestReviewComment>, 
	repository: IRepository,
reactions: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	content: maybe<ReactionContent>, 
	orderBy: maybe<IReactionOrder>
	} & IReactionConnection, 
	userContentEdits: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IUserContentEditConnection>
}

interface IARGCommitCommentThread {
	commit: ICommit, 
	repository: IRepository,
comments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ICommitCommentConnection
}

interface IARGPullRequestReviewThread {
	pullRequest: IPullRequest, 
	repository: IRepository,
comments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPullRequestReviewCommentConnection
}

interface IARGDeployment {
	commit: maybe<ICommit>, 
	creator: maybe<IActor>, 
	latestStatus: maybe<IDeploymentStatus>, 
	ref: maybe<IRef>, 
	repository: IRepository,
statuses: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IDeploymentStatusConnection>
}

interface IARGProtectedBranch {
	creator: maybe<IActor>, 
	repository: IRepository,
pushAllowances: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IPushAllowanceConnection, 
	reviewDismissalAllowances: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IReviewDismissalAllowanceConnection
}

interface IARGRelease {
	author: maybe<IUser>, 
	tag: maybe<IRef>,
releaseAssets: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	name: maybe<string>
	} & IReleaseAssetConnection
}

interface IARGTopic {
	relatedTopics: {
		first: maybe<number>
	} & IARGTopic, 
	stargazers: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	orderBy: maybe<IStarOrder>
	} & IStargazerConnection
}

interface IARGContributionsCollection {
	totalIssueContributions: {
		excludeFirst: maybe<boolean>, 
	excludePopular: maybe<boolean>
	}, 
	totalPullRequestContributions: {
		excludeFirst: maybe<boolean>, 
	excludePopular: maybe<boolean>
	}, 
	totalRepositoriesWithContributedIssues: {
		excludeFirst: maybe<boolean>, 
	excludePopular: maybe<boolean>
	}, 
	totalRepositoriesWithContributedPullRequests: {
		excludeFirst: maybe<boolean>, 
	excludePopular: maybe<boolean>
	}, 
	totalRepositoryContributions: {
		excludeFirst: maybe<boolean>
	},
contributionCalendar: IContributionCalendar, 
	mostRecentCollectionWithActivity: maybe<IContributionsCollection>, 
	mostRecentCollectionWithoutActivity: maybe<IContributionsCollection>, 
	popularIssueContribution: maybe<ICreatedIssueContribution>, 
	popularPullRequestContribution: maybe<ICreatedPullRequestContribution>, 
	user: IUser,
firstIssueContribution: {
		ignoreTimeRange: maybe<boolean>
	} & maybe<CreatedIssueOrRestrictedContribution>, 
	firstPullRequestContribution: {
		ignoreTimeRange: maybe<boolean>
	} & maybe<CreatedPullRequestOrRestrictedContribution>, 
	issueContributions: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	excludeFirst: maybe<boolean>, 
	excludePopular: maybe<boolean>
	} & ICreatedIssueContributionConnection, 
	joinedGitHubContribution: {
		ignoreTimeRange: maybe<boolean>
	} & maybe<IJoinedGitHubContribution>
}

interface IARGGist {
	owner: maybe<IRepositoryOwner>,
comments: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IGistCommentConnection, 
	stargazers: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>, 
	orderBy: maybe<IStarOrder>
	} & IStargazerConnection
}

interface IARGGistComment {
	author: maybe<IActor>, 
	editor: maybe<IActor>, 
	gist: IGist,
userContentEdits: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & maybe<IUserContentEditConnection>
}

interface IARGOrganizationIdentityProvider {
	organization: maybe<IOrganization>,
externalIdentities: {
		after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & IExternalIdentityConnection
}

interface IARGSecurityAdvisory {
	identifiers: ISecurityAdvisoryIdentifier, 
	references: ISecurityAdvisoryReference,
vulnerabilities: {
		orderBy: maybe<ISecurityVulnerabilityOrder>, 
	ecosystem: maybe<SecurityAdvisoryEcosystem>, 
	package: maybe<string>, 
	severities: maybe<SecurityAdvisorySeverity>, 
	after: maybe<string>, 
	before: maybe<string>, 
	first: maybe<number>, 
	last: maybe<number>
	} & ISecurityVulnerabilityConnection
}

interface IARGMutation {
	acceptTopicSuggestion: {
		input: IAcceptTopicSuggestionInput
	} & maybe<IAcceptTopicSuggestionPayload>, 
	addComment: {
		input: IAddCommentInput
	} & maybe<IAddCommentPayload>, 
	addProjectCard: {
		input: IAddProjectCardInput
	} & maybe<IAddProjectCardPayload>, 
	addProjectColumn: {
		input: IAddProjectColumnInput
	} & maybe<IAddProjectColumnPayload>, 
	addPullRequestReview: {
		input: IAddPullRequestReviewInput
	} & maybe<IAddPullRequestReviewPayload>, 
	addPullRequestReviewComment: {
		input: IAddPullRequestReviewCommentInput
	} & maybe<IAddPullRequestReviewCommentPayload>, 
	addReaction: {
		input: IAddReactionInput
	} & maybe<IAddReactionPayload>, 
	addStar: {
		input: IAddStarInput
	} & maybe<IAddStarPayload>, 
	createBranchProtectionRule: {
		input: ICreateBranchProtectionRuleInput
	} & maybe<ICreateBranchProtectionRulePayload>, 
	createProject: {
		input: ICreateProjectInput
	} & maybe<ICreateProjectPayload>, 
	declineTopicSuggestion: {
		input: IDeclineTopicSuggestionInput
	} & maybe<IDeclineTopicSuggestionPayload>, 
	deleteBranchProtectionRule: {
		input: IDeleteBranchProtectionRuleInput
	} & maybe<IDeleteBranchProtectionRulePayload>, 
	deleteProject: {
		input: IDeleteProjectInput
	} & maybe<IDeleteProjectPayload>, 
	deleteProjectCard: {
		input: IDeleteProjectCardInput
	} & maybe<IDeleteProjectCardPayload>, 
	deleteProjectColumn: {
		input: IDeleteProjectColumnInput
	} & maybe<IDeleteProjectColumnPayload>, 
	deletePullRequestReview: {
		input: IDeletePullRequestReviewInput
	} & maybe<IDeletePullRequestReviewPayload>, 
	dismissPullRequestReview: {
		input: IDismissPullRequestReviewInput
	} & maybe<IDismissPullRequestReviewPayload>, 
	lockLockable: {
		input: ILockLockableInput
	} & maybe<ILockLockablePayload>, 
	moveProjectCard: {
		input: IMoveProjectCardInput
	} & maybe<IMoveProjectCardPayload>, 
	moveProjectColumn: {
		input: IMoveProjectColumnInput
	} & maybe<IMoveProjectColumnPayload>, 
	removeOutsideCollaborator: {
		input: IRemoveOutsideCollaboratorInput
	} & maybe<IRemoveOutsideCollaboratorPayload>, 
	removeReaction: {
		input: IRemoveReactionInput
	} & maybe<IRemoveReactionPayload>, 
	removeStar: {
		input: IRemoveStarInput
	} & maybe<IRemoveStarPayload>, 
	requestReviews: {
		input: IRequestReviewsInput
	} & maybe<IRequestReviewsPayload>, 
	submitPullRequestReview: {
		input: ISubmitPullRequestReviewInput
	} & maybe<ISubmitPullRequestReviewPayload>, 
	unlockLockable: {
		input: IUnlockLockableInput
	} & maybe<IUnlockLockablePayload>, 
	updateBranchProtectionRule: {
		input: IUpdateBranchProtectionRuleInput
	} & maybe<IUpdateBranchProtectionRulePayload>, 
	updateProject: {
		input: IUpdateProjectInput
	} & maybe<IUpdateProjectPayload>, 
	updateProjectCard: {
		input: IUpdateProjectCardInput
	} & maybe<IUpdateProjectCardPayload>, 
	updateProjectColumn: {
		input: IUpdateProjectColumnInput
	} & maybe<IUpdateProjectColumnPayload>, 
	updatePullRequestReview: {
		input: IUpdatePullRequestReviewInput
	} & maybe<IUpdatePullRequestReviewPayload>, 
	updatePullRequestReviewComment: {
		input: IUpdatePullRequestReviewCommentInput
	} & maybe<IUpdatePullRequestReviewCommentPayload>, 
	updateSubscription: {
		input: IUpdateSubscriptionInput
	} & maybe<IUpdateSubscriptionPayload>, 
	updateTopics: {
		input: IUpdateTopicsInput
	} & maybe<IUpdateTopicsPayload>
}

interface IARGBot {
	avatarUrl: {
		size: maybe<number>
	}
}

export const github = new Graphtype<IQuery,
  IMutation,
  ISubscription,
  IARGQuery,
  IARGMutation,
  IARGSubscriptio>()