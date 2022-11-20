// Data structure for the questions

// List of all the questions in a section (here categories)
type QuestionItem = {
	category: string;
	categoryId: number;
	details: QuestionDetails[];
};

// Dependency of QuestionItem
type Dependency = {
	questionId: number;
	type: DependencyType;
	condition: DependencyCondition;
	values: number[];
};

// Type of dependency
enum DependencyType {
	number = "number",
	numberRange = "numberRange",
	boolean = "boolean",
}

// Different conditions in case of dependency to give a full control
enum DependencyCondition {
	equals = "equals",
	notEquals = "notEquals",
	and = "and",
	or = "or",
}

/// Single question object
export class QuestionDetails {
	readonly id: number;
	readonly shortId: string;
	readonly question: string;
	readonly placeholder: string;
	answer: any;
	readonly type: QuestionType;
	readonly isRequired: boolean;
	readonly options?: string[];
	readonly dependency?: Dependency;
	readonly subText?: string;

	constructor(
		id: number,
		shortId: string,
		question: string,
		placeholder: string,
		answer: string,
		type: QuestionType,
		options?: string[],
		dependency?: Dependency,
		isRequired: boolean = true,
		subText?: string
	) {
		this.id = id;
		this.shortId = shortId;
		this.question = question;
		this.placeholder = placeholder;
		this.answer = answer;
		this.type = type;
		this.options = options;
		this.dependency = dependency;
		this.isRequired = isRequired;
		this.subText = subText;
	}

	// Setter function for the answer of the question
	setAnswer(answer: any) {
		this.answer = answer;
	}
}

// Type of question
enum QuestionType {
	dropdown = "dropdown",
	short_text = "text",
	long_text = "textarea",
	number = "number",
	checkbox = "checkbox",
	radio = "radio",
	vertical_radio = "vertical_radio",
	text_description = "text_description",
}

// Data structure for each single answer to be sent to the backend
type Answers = {
	id: number;
	shortId: string;
	answer: any;
};

// Data structure to store all the questions by an array of QuestionItem
export class Questions {
	number: number;
	questions: QuestionItem[];
	referralCode?: string;

	constructor(
		number: number,
		questions: QuestionItem[],
		referralCode?: string
	) {
		this.number = number;
		this.questions = questions;
		this.referralCode = referralCode;
	}

	static init() {
		return new Questions(0, [
			{
				categoryId: 0,
				category: "",
				details: [
					new QuestionDetails(0, "", "", "", "", QuestionType.short_text),
				],
			},
		]);
	}
}

export { QuestionType, DependencyType, DependencyCondition };
export type { QuestionItem, Dependency, Answers };
