export const feedbacks = [
  {
    _id: "5e501444610567da80f7d1ea",
    Ratings: 4,
    FeedbackMsg: "This site is really awesome.",
    UserInfo: { UserName: "Ayush", City: "Patan", State: "Gujarat" }
  }
];

export function getFeedback() {
  return feedbacks;
}
