# aws-parameter-file-to-string

A CLI to transform a JSON file with parameters to a string with parameters for AWS CloudFormation.

The reason is that `aws cloudformation create-stack` and `aws cloudformation update-stack` takes a path to a file as parameters, but `aws cloudformation deploy` takes an option named `--parameter-overrides` that is a string with parameters.

```
[
  {
    "ParameterKey": "Foo",
    "ParameterValue": "someValue"
  }
]
```

Will get transformed into

```
"Foo=someValue"
```

When https://github.com/aws/aws-cli/issues/3445 is resolved, this package won't be needed.

## Installation

```
npm install aws-parameter-file-to-string
```

## Usage

```
USAGE: aws-parameter-file-to-string -i path/to/param-file.json
The following options are supported:
  -i, --input <ARG1> 	The path to an AWS parameter file in JSON format (mandatory)
```

## Testing

```
npm run test
```
