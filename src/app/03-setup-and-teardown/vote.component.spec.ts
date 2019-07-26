import { VoteComponent } from "./vote.component";

describe('Vote Component', () => {
    let component: VoteComponent;

    beforeEach(() => {
        component = new VoteComponent();
    }); 

    it('should increment totalVotes when upvoted', () => {
        // Act
        component.upVote();
        // Test
        expect(component.totalVotes).toBe(1);
    });
    // it('should decrement totalVotes when downvoted', () => {
    //     // Act
    //     component.downVote();
    //     // Test
    //     expect(component.totalVotes).toBe(-1);
    // });
});