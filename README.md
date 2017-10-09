# MDC Dialog <span> Bug
If you wrap the dialog button label with a <span> you can no longer click on the label to action the dialog.
We use react-intl and <FormattedMessage> for i18n which wraps translated text in <span>'s.

```
npm install
npm start
```

Now click on the text of the **Click bug** button. The dialog will not close.