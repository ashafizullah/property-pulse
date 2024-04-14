const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties(){
  try {
    if(!apiDomain){
      return [];
    }

    const res = await fetch(`${apiDomain}/properties`);

    if(!res.ok){
      throw new Error('Network response was not ok');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function fetchProperty(id){
  try {
    if(!apiDomain){
      return null;
    }

    const res = await fetch(`${apiDomain}/properties/${id}`);

    if(!res.ok){
      throw new Error('Network response was not ok');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export {
  fetchProperties,
  fetchProperty
}

