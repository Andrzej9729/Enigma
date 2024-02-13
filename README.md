# MongoDB Cluster

Deployment of MongoDB cluster using the image version:

* mongo:7.0.5
* Docker Compose: v2.24.5
* grafana/loki:2.9.2
* grafana/grafana:8.0.6
* prom/prometheus:v2.49.1

In the [compose.yml](compose.yml) file, you will find the configuration of the cluster as well as monitoring elements.

## Deploy

While in the directory containing the `compose.yml file`, the Docker command `docker compose up -d` is executed to deploy and run the cluster.

Then, the cluster is logged into using the command:

```bash
docker compose exec -it mongodb1 bash
```

After executing the above command, we find ourselves inside the container, where we run the following command:

```bash
bash /scripts/rs_init.sh
```

The command deployed the configuration for the cluster, added a `user` named `admin` with the `password: admin` and the `root role`. 
It also created 2 databases named `database1` and `database2`, each with `3 collections`, and added `3 records` in each collection.


We are utilizing the `mongo-network` network for inter-container communication among all services within the cluster.

## Grafana

Access to Grafana can be obtained using `localhost:3000`.

* ***login: admin***
* ***password: admin***

Dashboards for detailed analysis can be created there.

## Prometheus

Access to Prometheus is obtained using the link `localhost:9090`.

The platform also allows browsing metrics or creating charts.


