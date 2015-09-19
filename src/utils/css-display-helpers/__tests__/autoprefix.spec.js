import autoprefix from '../autoprefix';


describe('Auto prefix helper', () => {
  it('should correctly add vendor prefix to concrete property', () => {
    const style = autoprefix({
      boxShadow: '5px'
    });
    expect(style).to.have.property('WebkitBoxShadow', style.boxShadow);
    expect(style).to.have.property('MozBoxShadow', style.boxShadow);
    expect(style).to.have.property('msBoxSelect', style.boxShadow);
  });
});
