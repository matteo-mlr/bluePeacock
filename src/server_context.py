import yaml

def getIframe():
    with open('config.yaml', 'r') as f:
        data = yaml.load(f, Loader=yaml.FullLoader)
        return data['blue-peacock']['grafana']['dashboards'][0]