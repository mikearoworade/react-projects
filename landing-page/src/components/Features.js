import styled from "styled-components";

const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
`;


const Card = styled.div`
  background-color: #f4f4f4;
  padding: 1rem;
  width: 200px;
  border-radius: 8px;
  text-align: center;

  &:hover {
    background-color: #e2e2e2;
  }
`;


function Features() {
    return (
        <Section>
            <Card>
                <h3>Fast</h3>
                <p>Blazing fast performance.</p>
            </Card>
            <Card>
                <h3>Responsive</h3>
                <p>Looks great on all devices.</p>
            </Card>
            <Card>
                <h3>Modern</h3>
                <p>Built with modern tools.</p>
            </Card>
        </Section>
    );
}

export default Features;
