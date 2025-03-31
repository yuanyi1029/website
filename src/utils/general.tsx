const redirectUser: (hyperlink: string) => void = (hyperlink) => {
  window.open(hyperlink, "_blank", "noreferrer");
}

export { redirectUser };