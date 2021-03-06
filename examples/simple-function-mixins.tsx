import { styled } from '@compiled/react';
import { objectStyles, colorMixin, colors } from 'module-a';

export default {
  title: 'mixins/simple functions',
};

const StyledObjectLiteral = styled.div({
  fontSize: objectStyles.fontSize,
  ...colorMixin(5),
});

const StyledTemplateLiteral = styled.div`
  color: ${objectStyles.color};
  background-color: ${objectStyles.backgroundColor(colors.primary)};
`;

const getColor = (c: string) => ({ color: c });

const Children = ({ color }: { color: string }) => (
  <span css={{ ...getColor(color) }}>Hello css prop component. Hover me Please.</span>
);

export const ObjectLiteral = () => (
  <>
    <StyledObjectLiteral>Hello styled component</StyledObjectLiteral>
    <div
      css={{
        margin: '4px 0',
        padding: 4,
        border: `1px solid ${objectStyles.backgroundColor(colors.danger)}`,
        ':hover': colorMixin(2),
      }}>
      <Children color="red" />
    </div>
  </>
);

export const TemplateLiteral = () => (
  <>
    <StyledTemplateLiteral>Hello styled component</StyledTemplateLiteral>
    <div
      css={`
        margin: 4px 0;
        padding: 4px;
        border: 1px solid ${objectStyles.backgroundColor(colors.danger)};
        :hover {
          color: ${objectStyles.color};
          background-color: ${objectStyles.backgroundColor(colors.primary)};
        }
      `}>
      <Children color="blue" />
    </div>
  </>
);
