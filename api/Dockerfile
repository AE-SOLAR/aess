FROM python:3.12.5-alpine3.20

WORKDIR /code
COPY ./requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# COPY ./app /code/app

WORKDIR /code/app
CMD ["uvicorn", "main:app", "--reload", "--port", "8088", "--host", "0.0.0.0"]
